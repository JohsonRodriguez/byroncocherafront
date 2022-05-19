import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import { Addcar } from 'src/app/models/addcar';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-addtocar',
  templateUrl: './addtocar.component.html',
  styleUrls: ['./addtocar.component.css'],
  styles: [
    `
      .greenClass { background-color: green }
      .redClass { background-color: red }
    `
  ]
})
export class AddtocarComponent implements OnInit {
   isButtonVisible = false;
   isButtonVisible2 = false;
   isButtonVisible3 = false;
    dni="";
    name="";
    lastname="";
    cars:any[]=[];
    registrationplate="";
    observation="";
    observ="";
    obs="";
    placa=""
    user ="Jhonson";
    keyword = 'registrationplate';
    public data$:Observable<any[]>;
    
     selectEvent(item) { this.registrationplate=item;  }
    persons: Person[]=[];
    data: any = {}
    person:Person;
    car:Car;
    constructor( 
      private personService:PersonService,
      private carService:CarService,
      private toastr: ToastrService,
      private router:Router) { }
  
    ngOnInit(): void {
      this.getDataFilterPlate();
    }
  
      
  searchbyDni(){
    var dni:any= (document.getElementById("dni") as HTMLInputElement).value;
      this.personService.searchByDni(dni).subscribe(
        data=>{
          this.person=data;
          this.name=this.person.name;
          this.lastname=this.person.lastname;
          this.cars=this.person.cars;
          this.isButtonVisible = true;
        },
        err =>{
          this.toastr.error(err.error.exception,'Error',{
            timeOut:3000
                    
          });
          console.log(err.error.exception);
          this.router.navigate(['/dashboard/addtocar']);
          
         }
      );
  }

  

  removeCartoPerson(){
    if(this.data.optcar==undefined){
      this.placa=""
    }else{
      this.placa=this.data.optcar
    }
    
    const addcar = new Addcar(
      this.dni,
      this.placa
      
      );
      console.log(addcar);
    this.personService.removeToCar(addcar).subscribe(
      data=>{
        
        this.toastr.success('Vehiculo eliminado con éxito','OK',{
          timeOut:3000
        });
        this.searchbyDni();

      },err=>{
        this.toastr.error(err.error.exception,'Error al asignar conductor',{
          timeOut:3000
        });
        
        this.router.navigate(['/dashboard/addtocar']);

      }
      
    );
  }

  addCartoPerson(){
     const addcar = new Addcar(
      this.dni,
      this.registrationplate["registrationplate"]
      
      );
      console.log(addcar);
    this.personService.addToCar(addcar).subscribe(
      data=>{
        
        this.toastr.success('Conductor asignado con éxito','OK',{
          timeOut:3000

        });
        this.searchbyDni();
        this.isButtonVisible3 = false;
       

      },err=>{
        this.toastr.error(err.error.exception,'Error al asignar conductor',{
          timeOut:3000
        });
        
        this.isButtonVisible3 = false;

      }
      
    );
  }
    getDataFilterPlate(){
    this.data$=this.carService.lista();
  }
  }
 