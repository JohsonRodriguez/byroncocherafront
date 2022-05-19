import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarService } from '../../../services/car.service';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Person } from '../../../models/person';
import { PersonService } from '../../../services/person.service';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-newcar',
  templateUrl: './newcar.component.html',
  styleUrls: ['./newcar.component.css'],
  providers:[PersonService]
})
export class NewcarComponent implements OnInit {
  brands:Brand[] = [];
  registrationplate="";
  carbrand ="";
  carmodel="";
  carcolor="";
    public dni=""
    person:Person;
    doc="";
   ////////////////////
keyword = 'dni';
  

  public data$:Observable<any[]>;
    
  selectEvent(item) {
     this.dni=item;
  }


////////////////////
    constructor(
      private carService: CarService,
      private personService:PersonService,
      private toastr: ToastrService,
      private router:Router) { 
        
      }

  ngOnInit(): void {
    this.getbrand();
  }
  onCreate():void{
    // this.doc=this.dni["dni"];
    // this.personService.searchByDni(this.doc).subscribe(
    //   data2=>{
    //     this.person=data2;
        const car = new Car(
          this.registrationplate.toUpperCase(),
          this.carbrand.toUpperCase(),
          this.carmodel.toUpperCase(),
          this.carcolor.toUpperCase(),
          
          );
          this.carService.addCar(car).subscribe(
            data=>{
              this.toastr.success('Car Saved','OK',{
                timeOut:3000
              });
              this.router.navigate(['/dashboard/cars']);
            },err=>{
              this.toastr.error(err.error.mensaje,'Fail',{
                timeOut:3000
              });
              this.router.navigate(['/dashboard/newcar']);
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

  getDataDNI(){
    this.data$=this.personService.lista();
  }

  
  getbrand():void{
    this.carService.models().subscribe(
      data=>{
        this.brands=data;
       
      },
      err=>{
        console.log(err);
      }
    )
   
  }

}
