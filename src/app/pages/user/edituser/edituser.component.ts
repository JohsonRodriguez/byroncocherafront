import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Person } from '../../../models/person';
import { PersonService } from '../../../services/person.service';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import { UserService } from 'src/app/services/user.service';
import { Users } from '../../../models/users';
import { User } from 'src/app/models/user';
import { Edituser } from 'src/app/models/edituser';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  users: Users=null;
  edituser: Edituser=null;
  nombre?="";
  username="";
  password="";
    
  

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(){
    
    const username= this.activatedRoute.snapshot.params.username;
    console.log(username);
    this.userService.searchByUsername(username).subscribe(
      data=>{
        this.users=data;
        console.log(data);
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
     
    const edituser = new Edituser(
      this.users.nombre,
      this.users.nombreUsuario    );
      console.log(edituser);
      this.userService.updateUser(edituser).subscribe(
        data=>{
          console.log(data);
          this.toastr.success('Usuario Actualizado','OK',{
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
