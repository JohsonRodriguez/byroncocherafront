import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';

import { Person } from '../../../models/person';
import { PersonService } from '../../../services/person.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Addrol } from 'src/app/models/addrol';


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css'],
  providers:[PersonService]
})
export class NewuserComponent implements OnInit {
  nombre="";
    nombreUsuario="";
  password="";
  rolNombre="";
    public dni=""
    person:Person;
    doc="";
   ////////////////////
keyword = 'dni';
  

  public data$:Observable<any[]>;
  public data2$:Observable<any[]>;
    
  selectEvent(item) {
     this.dni=item;
  }


////////////////////
    constructor(
      private userService: UserService,
      private toastr: ToastrService,
      private router:Router) { 
        
      }

  ngOnInit(): void {
    // this.getbrand();
  }
  onCreate():void{
    // this.doc=this.dni["dni"];
    // this.personService.searchByDni(this.doc).subscribe(
    //   data2=>{
    //     this.person=data2;
        const user = new User(
          this.nombre,
          this.nombreUsuario,
          this.password         
          );
        
          this.userService.addUser(user).subscribe(
            data=>{
              this. addRol();
            },err=>{
              this.toastr.error(err.error.mensaje,'Fail',{
                timeOut:3000
              });
              this.router.navigate(['/dashboard/newuser']);
            }
          );
          
    //   },
    //   err =>{
    //     this.toastr.error(err.error.mensaje,'Fail',{
    //       timeOut:3000
    //     });
    //    }
    // );
    
  }

  // getDataDNI(){
  //   this.data$=this.personService.lista();
  // }

  
  addRol(){
    const rol = new Addrol(
      this.nombreUsuario,
      this.rolNombre         
      );
   
    this.userService.addRol(rol).subscribe(
      data2=>{
        console.log(data2);
        console.log(rol);
        this.toastr.success('User Saved','OK',{
          timeOut:3000
        });
        this.router.navigate(['/dashboard/users']);
      },err=>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000
        });
        this.router.navigate(['/dashboard/newuser']);
      }
    );

    //end Role
   
  }

}
