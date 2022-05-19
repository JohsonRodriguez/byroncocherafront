import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rol } from 'src/app/models/rol';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-newrol',
  templateUrl: './newrol.component.html',
  styleUrls: ['./newrol.component.css']
})
export class NewrolComponent implements OnInit {
  
  
  users: Users=null;
  addrol: Rol=null;
  removerol: Rol=null;
   name?="";
   nombre="";
  username="";
  password="";
    newrol="";
    namerol="";
  

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(){
    
    const username= this.activatedRoute.snapshot.params.username;
    this.userService.searchByUsername(username).subscribe(
      data=>{
        this.users=data;
        console.log(this.users.roles[0].rolNombre);
      },
      err =>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000
        });
        
        this.router.navigate(['/dashboard/edituser']);
        
      }
    );
  }

  onUpdate(){
    this.namerol= this.users.roles[0].name; 
    if(this.namerol=="ROLE_USER"){
      this.newrol='ROLE_ADMIN'
    }else {this.newrol='ROLE_USER'}
     
    console.log(this.newrol);
       this.removerol = new Rol(
      this.users.nombreUsuario,
      this.newrol);
      console.log(this.removerol);
      this.namerol= null;
      this.userService.DeleteRol(this.removerol).subscribe(
        data=>{
          this.Addrol();
        },err=>{
          this.toastr.error(err.error.mensaje,'Fail',{
            timeOut:3000
          });
        }      
      );
      
    };

    Addrol(){
      this.namerol= this.users.roles[0].name; 
      console.log(this.namerol);
      
     
       this.addrol = new Rol(
        this.users.nombreUsuario,
        this.namerol);
        console.log( this.addrol);
        this.userService.AddRol( this.addrol).subscribe(
          data=>{
            console.log(data);
            this.toastr.success('EL Rol se cambio con exito','OK',{
              timeOut:3000
            });
            this.router.navigate(['/dashboard/users']);
    
          },err=>{
            this.toastr.error(err.error.mensaje,'Fail',{
              timeOut:3000
            });
          }      
        );
      };

}
