import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../services/person.service';
import { Person } from '../../../models/person';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarService } from '../../../services/car.service';
import { Newperson } from '../../../models/newperson';


@Component({
  selector: 'app-newperson',
  templateUrl: './newperson.component.html',
  styleUrls: ['./newperson.component.css']
})
export class NewpersonComponent implements OnInit {
  dni="";
  name ="";
    lastname="";
    phone="";
    type="";
    state="";
    person
    // car:Array<any>;
    // public registrationplate1=""
    // public registrationplate2=""
    // public registrationplate3=""
    // keyword = 'registrationplate';
    // public data$:Observable<any[]>;
    // placas: any;
    // carros="";
    // myJsonString:string;
    
//   selectEvent1(item) {
//      this.registrationplate1=item;
//   }
//   selectEvent2(item) {
//     this.registrationplate2=item;
//  }
//  selectEvent3(item) {
//   this.registrationplate3=item;
// }
   

  constructor(
    private carService: CarService,
    // private car: Car,
    private personService: PersonService,
    private toastr: ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    // this.getDataPlate();
  }

  onCreate():void{
    // var car1=this.registrationplate1["registrationplate"];
    // var car2=this.registrationplate2["registrationplate"];
    // var car3=this.registrationplate3["registrationplate"];
    // var init=`[{"registrationplate":"`;
    // var init2=`{"registrationplate":"`;
    // var fin='"}]';
    // var fin2='"},';

    // if (car1==null){
    //   this.toastr.error('Error al asignar 1er vehiculo','Hubo un error',{
    //         timeOut:3000
    //       });
    //       this.router.navigate(['/dashboard/newperson']);
    // }else if(car1!=null && car2==null && car3!=null){
    //   this.toastr.error('Error al asignar 2do vehiculo','Hubo un error',{
    //     timeOut:3000
    //   });
    //   this.router.navigate(['/dashboard/newperson']);

    // }else{
    // if (car1!=null && car2==null && car3==null){
    //   this.carros=init+car1+fin;
    // }
    // if (car1!=null && car2!=null && car3==null){
    //   if(car1==car2){
    //     this.toastr.error('No puedes asignar vehiculos con la misma placa','Hubo un error',{
    //       timeOut:3000
    //     });
    //     this.router.navigate(['/dashboard/newperson']);
    //   }else{
    //     this.carros=init+car1+fin2+init2+car2+fin;
    //   }
      
    // }
    // if (car1!=null && car2!=null && car3!=null){
    //   if(car1==car2|| car1==car3 || car2==car3){
    //     this.toastr.error('No puedes asignar vehiculos con la misma placa','Hubo un error',{
    //       timeOut:3000
    //     });
    //     this.router.navigate(['/dashboard/newperson']);
    //   }else{
    //     this.carros=init+car1+fin2+init2+car2+fin2+init2+car3+fin;
    //   }
       
    // }}
   
       
    // this.placas = 
    //   {
    //     "dni": this.dni.toUpperCase(),
    //     "name": this.name.toUpperCase(),
    //     "lastname": this.lastname.toUpperCase(),
    //     "phone":  this.phone,
    //     "type":this.type.toUpperCase(),
    //     "state": this.state="ACTIVO",
    //     "cars":JSON.parse(this.carros)
  
    // }
    const newperson = new Newperson(
      this.dni,
      this.name,
      this.lastname,
      this.phone,
      this.type         
      );
    
      this.personService.addPerson(newperson).subscribe(
        data=>{
          
          this.toastr.success('Persona Guardada con éxito','OK',{
            timeOut:3000
          });
          this.router.navigate(['/dashboard/persons']);

        },err=>{
          
          this.toastr.error(err.error.exception,'Error al guardar Persona',{
            timeOut:3000
          });
          
          this.router.navigate(['/dashboard/newperson']);

        }
        
      );
   

  }
  // getDataPlate(){
  //   this.data$=this.carService.lista();
  // }

}
