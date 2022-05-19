import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Register } from 'src/app/models/register';
import { CarService } from 'src/app/services/car.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-detailregister',
  templateUrl: './detailregister.component.html',
  styleUrls: ['./detailregister.component.css']
})
export class DetailregisterComponent implements OnInit {
  register:Register;
  car:Car;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private registerService: RegisterService,
    private carService: CarService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.params.id;
    this.registerService.searchById(id).subscribe(
      data=>{
        this.register=data;
        
        this.searchCar(this.register.registrationplate);
      },
      err =>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000
        });
        this.router.navigate(['/dashboard/verregister']);
      }
    );
   
  }

  searchCar(registrationplate){
    this.carService.searchByPlaca(registrationplate).subscribe(
      data=>{
        this.car=data;
        console.log(this.car)
      },
      err =>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000
        });
        
        // this.router.navigate(['/dashboard/verregister']);
        
      }
    );

  }

}
