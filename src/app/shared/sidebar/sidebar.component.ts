import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { SidebarService } from '../../services/sidebar.service';2
import { ToastrService } from 'ngx-toastr';
import jwt_decode from "jwt-decode";
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/models/users';
import {CookieService} from 'ngx-cookie-service';
import { CredentialsService } from 'src/app/services/credentials.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   
  // public get currentUser() {
  //   // return this.sidebarService.currentUser;
  //   return this.credentials.rol;
  // }
  
  // name = localStorage.getItem('username');
token="";
username="";
currentUser="";
rol:String="";
users: Users=null;
roles:any[];
  menuItems?:any[];
  menuItemsx?:any[];
  
  constructor(public credentials:CredentialsService ,private sidebarService:SidebarService,private router:Router, 
    private sessionService: SessionService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private userService: UserService,
    private cookies: CookieService,
    public auth:AuthService,
    ) { 
    this.menuItems=sidebarService.menu;
    this.menuItemsx=sidebarService.menux;
   
    
  }

 

  ngOnInit(): void {
     this.currentUser=sessionStorage.getItem('AuthAuthorities'),
    this.username=this.tokenService.getNombre();
    


  }
  
  logout(): void {
    this.username="";
    // this.name="";
    this.rol="";
    
    localStorage.removeItem('username');
    localStorage.removeItem('rol')
    localStorage.clear();
    sessionStorage.clear();
    this.sessionService.deleteSession();
    this.cookies.delete('session-token');
    this.router.navigate(['/login']);
    
  }
  
  getuser(){
    
//     var token = this.sessionService.getSessionToken();
//     var decoded =jwt_decode(token);
//     this.username = decoded["user_name"];
 
//     this.userService.searchByUsername(this.username).subscribe(
//       data=>{
//         this.users=data;
//         this.name=this.users["name"];
//         this.roles=this.users["roles"];
//         this.rol=this.roles[0].name;
//         localStorage.setItem('username', JSON.stringify(this.name).replace(/['"]+/g, ''));
//         localStorage.setItem('rol', JSON.stringify(this.rol).replace(/['"]+/g, ''));
//       },
//       err =>{
//         this.toastr.error(err.error.mensaje,'Fail',{
//           timeOut:3000
//         });
                
//       }
//     );
    
}



}


