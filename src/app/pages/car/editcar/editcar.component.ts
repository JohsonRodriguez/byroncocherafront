import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { PersonService } from 'src/app/services/person.service';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-editcar',
  templateUrl: './editcar.component.html',
  styleUrls: ['./editcar.component.css']
})
export class EditcarComponent implements OnInit{
car: Car=null;

constructor(
  // private personService: PersonService,
  private carService: CarService,
  private activatedRoute: ActivatedRoute,
  private toastr: ToastrService,
  private router: Router
) { }

ngOnInit(){
  const id= this.activatedRoute.snapshot.params.id;
  this.carService.searchByPlaca(id).subscribe(
    data=>{
      this.car=data;
    },
    err =>{
      this.toastr.error(err.error.mensaje,'Fail',{
        timeOut:3000
      });
      
      this.router.navigate(['/dashboard/edit']);
      
    }
  );
}

onUpdate(){
  const id= this.activatedRoute.snapshot.params.id;
  this.carService.updateCar(this.car).subscribe(
    data=>{
      console.log(data);
      this.toastr.success('Car Updated','OK',{
        timeOut:3000
      });
      this.router.navigate(['/dashboard/cars']);

    },err=>{
      this.toastr.error(err.error.mensaje,'Fail',{
        timeOut:3000
      });
    }
  );
};

}
