import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from '../../services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[]=[];
  filterregistrationplate="";
  
    constructor(private carService: CarService) { 
      
    }
   

  ngOnInit(): void {
    this.cargarCars();
    
  }
  cargarCars():void{
    this.carService.lista().subscribe(
      data=>{
        this.cars=data;
       
      },
      err=>{
        console.log(err);
      }
    )
   
  }


}
