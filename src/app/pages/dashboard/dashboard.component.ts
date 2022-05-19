import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { CarService } from '../../services/car.service';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   total: any;
   totalcar: any;
   totalregister: any;
   totalparking: any;

  constructor(private personService: PersonService, private carService : CarService,
    private registerService: RegisterService) { }

  ngOnInit(): void {
    
    this.totalPerson();
    this.totalCar();
    this.totalRegister();
    this.totalParking();
  }
  
  totalPerson():void{
    this.personService.countPerson().subscribe(
      data=>{
        this.total=data;
       
      },
      err=>{
        console.log(err);
      }
    )
   
  }
  totalCar():void{
    this.carService.countCar().subscribe(
      data=>{
        this.totalcar=data;
       
      },
      err=>{
        console.log(err);
      }
    )
   
  }

  totalRegister():void{
    this.registerService.countRegister().subscribe(
      data=>{
        this.totalregister=data;
       
      },
      err=>{
        console.log(err);
      }
    )
   
  }

  
  totalParking():void{
    this.registerService.countParking().subscribe(
      data=>{
        this.totalparking=data;
       
      },
      err=>{
        console.log(err);
      }
    )
   
  }

}
