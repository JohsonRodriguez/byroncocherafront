import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Person } from '../../models/person';
import { PersonService } from '../../services/person.service';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  styles: [
    `
      .greenClass { background-color: green }
      .redClass { background-color: red }
    `
  ]
})
export class PersonsComponent implements OnInit {

  persons: Person[]=[];
  
  filtername="";
  
  constructor(private personService: PersonService,private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.cargarPersons();
    

  }

  cargarPersons():void{
    this.personService.lista().subscribe(
      data=>{
        this.persons=data;
        console.log(this.persons);
      },
      err=>{
        console.log(err);
      }
    )
   
  }

  cambiarEstado(i: number){
    var dni = this.persons[i].dni;
    var state=this.persons[i].enabled;
    if(state==true){
      var newstate=false;
    }else{
      var newstate=true;
    }
     this.personService.changeState(dni,newstate).subscribe(
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
