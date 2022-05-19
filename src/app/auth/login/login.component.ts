import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { Session } from 'src/app/models/session';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/models/users';
import {CookieService} from 'ngx-cookie-service';
import { CredentialsService } from 'src/app/services/credentials.service';
import { Login } from '../../models/login';
import { Token } from '@angular/compiler';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials:any=LoginUsuario
  token="";
  rol:String="";
  
  roles:any[];
name:String="";
users: Users=null;
loginUsuario: LoginUsuario;
nombreUsuario=""
  password=""
  errMsj: string;
 
  constructor(
    private router: Router, 
    private sessionService:SessionService,
    private authService: AuthService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private userService: UserService,
    private credentialsService: CredentialsService
    ) { }
    // login(){
    //   // this.cuenta =(
    //   //   this.nombreUsuario, 
    //   //   this.password      
    //   //   );
    //     console.log(JSON.parse(JSON.stringify(body)) )
    //   this.authService.login(body) .subscribe(
    //     data=>{         
    //     this.toastr.success('Bienvenido','Credenciales correctas',{
    //       timeOut:3000
    //     });
    //      this.router.navigate(['/dashboard/dashboard']);
    //     },
    //     err =>{
    //       this.toastr.error('Usuario y contraseña no son correctos','Error al iniciar sesion',{
    //         timeOut:3000
    //       });
          
    //     }
    //   );
    // }
    login(): void {
      this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
      this.authService.login(this.loginUsuario).subscribe(
        data => {
          // this.isLogged = true;
  
          this.tokenService.setToken(data.token);
          this.sessionService.setSessionToken(data.token);
          this.tokenService.setnombreUsuario(data.nombreUsuario);
          this.tokenService.setNombre(data.nombre);
          this.tokenService.setAuthorities(data.authorities[0].authority);
          // this.roles = data.authorities;
          this.toastr.success('Bienvenido ' + data.nombreUsuario, 'OK', {
            timeOut: 3000
          });
          this.router.navigate(['/dashboard/dashboard']);
    
        },
        err => {
          // this.isLogged = false;
          this.errMsj = err.error.mensaje;
          console.log(err.error)
          this.toastr.error(this.errMsj,'Error al iniciar sesion',{
                    timeOut:3000
                  });
          // console.log(err.error.message);
        }
      );
    }
 

    ngOnInit
      ():void{
    // // this.sessionService.deleteSession();
    // // this.cookies.delete('session-token');
    // const body = (
    //   this.nombreUsuario, 
    //   this.password      
    //   );
    // this.authService.login(body)   
    //   .subscribe((result: Session) => {
    //     // this.authService.setSessionToken(result.access_token);
    //     // var token =result.access_token;
    //     // this.getuser(token);
        
    //     this.toastr.success('Bienvenido','Credenciales correctas',{
    //       timeOut:3000
    //     });
    //      this.router.navigate(['/dashboard/dashboard']);

    //   },err=>{
    //     this.toastr.error('Usuario y contraseña no son correctos','Error al iniciar sesion',{
    //       timeOut:3000
    //     });

    //   });   
    // console.log(this.nombreUsuario, this.password)
      
  }
  nombre:String="";
  getuser(token){
    
    // var token = this.sessionService.getSessionToken();
    var decoded =jwt_decode(token);
    this.nombreUsuario = decoded["user_name"];
 
    this.userService.searchByUsername(this.nombreUsuario).subscribe(
      data=>{
        this.users=data;
        this.name=this.users["name"];
        this.roles=this.users["roles"];
        this.rol=this.roles[0].name;
        this.credentialsService.name=this.name;
        this.credentialsService.rol=this.rol;

        localStorage.setItem('username', JSON.stringify(this.name).replace(/['"]+/g, ''));
        localStorage.setItem('rol', JSON.stringify(this.rol).replace(/['"]+/g, ''));
      },
      err =>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000
        });
                
      }
    );
    
 }

 
   
  


}
