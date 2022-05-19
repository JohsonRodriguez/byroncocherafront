import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Password } from 'src/app/models/password';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {
  
  users: Users=null;
  newpassword: Password=null;
   name?="";
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
    this.userService.searchByUsername(username).subscribe(
      data=>{
        this.users=data;
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
     
    const newpassword = new Password(
      this.users.nombreUsuario,
      this.users.password    );
      console.log(newpassword);
      this.userService.ChangePassword(newpassword).subscribe(
        data=>{
          console.log(data);
          this.toastr.success('La contraseña se cambio con exito','OK',{
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
