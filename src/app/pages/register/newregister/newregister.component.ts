import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Register } from 'src/app/models/register';
import { PersonService } from 'src/app/services/person.service';
import { Checkin } from '../../../models/checkin';
import { RegisterService } from '../../../services/register.service';
import { Person } from '../../../models/person';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';


@Component({
  selector: 'app-newregister',
  templateUrl: './newregister.component.html',
  styleUrls: ['./newregister.component.css']
})
export class NewregisterComponent implements OnInit {
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
  estado=true;
  registers: Register[] = [];
  persons: Person[]=[];
  data: any = {}
  person:Person;
  car:Car;
  constructor( private registerService: RegisterService,
    private personService:PersonService,
    private carService:CarService,
    private toastr: ToastrService,
    private router:Router) { }

  ngOnInit(): void {
  }

  search(registrationplate:string){
    console.log(registrationplate);
    this.registerService.searchCarbyDay(registrationplate).subscribe(
      data => {
        this.registers = data;
      },
      err => {
        console.log("registrationplate" + registrationplate);
        console.log(err);
      }
    )
    this.searchbyDni();
  }

  onCreate(){
    var txtobs:any= (document.getElementById("observ") as HTMLInputElement).value;
    if(txtobs == ""){
      this.obs="sin novedad"
    }else{
      this.obs=txtobs
    }

    if(this.data.optcar==undefined){
      this.placa=""
    }else{
      this.placa=this.data.optcar
    }
    const checkin = new Checkin(
      this.user=sessionStorage.getItem('AuthuName'),
      this.registrationplate=this.placa,
     this.observation=this.obs,
      this.dni=this.dni
      );
      console.log(checkin);
  this.registerService.addCheckin(checkin).subscribe(
    data=>{
      this.toastr.success('Checkin Saved','OK',{
        timeOut:3000
      });
      this.router.navigate(['/dashboard/register']);
    },err=>{
      this.toastr.error(err.error.exception,'Error',{
        timeOut:3000
      });
      this.router.navigate(['/dashboard/newregister']);
    }
  );
 }

 checkOut(){
 var txtobs:any= (document.getElementById("observ") as HTMLInputElement).value;
    if(txtobs == ""){
      this.obs="sin novedad"
    }else{
      this.obs=txtobs
    }
    if(this.data.optcar==undefined){
      this.placa=""
    }else{
      this.placa=this.data.optcar
    }
    const checkin = new Checkin(
      this.user=sessionStorage.getItem('AuthuName'),
      this.registrationplate=this.placa,
     this.observation=this.obs,
      this.dni=this.dni
      );

this.registerService.addCheckout(checkin).subscribe(
  data=>{
    this.toastr.success('Checkout Saved','OK',{
      timeOut:3000
    });
    this.router.navigate(['/dashboard/register']);
  },err=>{
    this.toastr.error(err.error.exception,'Error',{
      timeOut:3000
    });
    this.router.navigate(['/dashboard/newregister']);
  }
);
}

searchbyDni(){
  var dni:any= (document.getElementById("dni") as HTMLInputElement).value;
    this.personService.searchByDni(dni).subscribe(
      data=>{
        this.person=data;
        this.name=this.person.name;
        this.lastname=this.person.lastname;
        this.cars=this.person.cars;
        this.estado=this.person.enabled;
        if(this.estado==false){
          this.isButtonVisible = false;
          this.isButtonVisible3 = true;
        }else{
          this.isButtonVisible = true;
          this.isButtonVisible3 = false;
        }
        
      },
      err =>{
        this.toastr.error(err.error.exception,'Error',{
          timeOut:3000
                  
        });
        console.log(err.error.exception);
        this.router.navigate(['/dashboard/newregister']);
        
       }
    );
}
}
function radioChangeHandler(event: Event, any: any) {
  throw new Error('Function not implemented.');
}
