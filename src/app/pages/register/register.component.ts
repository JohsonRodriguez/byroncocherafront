import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/register';
import { RegisterService } from '../../services/register.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registers: Register[] = [];
  
  filtername="";

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.getdate();
        this.cargarRegisters();
  }
  public  fullday:any="";


  cargarRegisters(): void {
    this.registerService.lista(this.fullday).subscribe(
      data => {
        this.registers = data;
        
      },
      err => {
        console.log(err);
      }
    )
  }

  getRegisters(): void {
     var chooseDay:any= (document.getElementById("date") as HTMLInputElement).value;
     console.log(chooseDay);
    this.registerService.lista(chooseDay).subscribe(
      data => {
        this.registers = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  getdate(){     
var today = new Date();
var day: any = new Date().getDate();
if (day < 10) {day = '0' + day;}
var month: any = today.getMonth() + 1;
if (month < 10) {month = '0' + month;}
var year = today.getFullYear();
this.fullday  =year  + "-" + month + "-" + day ;
console.log(today);
console.log(day);
console.log(this.fullday);


}
  

}
