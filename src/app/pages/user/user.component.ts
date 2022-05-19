import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/models/users';

import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  styles: [
    `
      .greenClass { background-color: #46CC46 }
      .redClass { background-color: #EC3545 }
    `
  ]
})
export class UserComponent implements OnInit {

  users: Users[]=[];
  estate="";
  filter="";
  
  constructor(private userService: UserService,private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.cargarUsers();
    

  }

  cargarUsers():void{
    this.userService.lista().subscribe(
      data=>{
        this.users=data;
        console.log(this.users);
       
      },
      err=>{
        console.log(err);
      }
    )
   
  }

  
  cambiarEstado(i: number){
    var username = this.users[i].nombreUsuario;
    var state=this.users[i].state;
    if(state==true){
      var newstate=false;
    }else{
      var newstate=true;
    }
     this.userService.changeState(username,newstate).subscribe(
      data=>{
        this.toastr.success('Se cambio el estado con exito','Cambio de estado',{
          timeOut:3000
        });
        window.location.reload();
       
      },
      err=>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000
        });
        
        
      }
    )

  }

}
