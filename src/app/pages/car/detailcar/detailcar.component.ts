import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-detailcar',
  templateUrl: './detailcar.component.html',
  styleUrls: ['./detailcar.component.css']
})
export class DetailcarComponent implements OnInit {
  qr:string
  public commonUrl : string = 'https://byron-garage.herokuapp.com//car/generateQRCode/400/400/'

  person: Person=null;
  car:Car=null;

  constructor(
    private personService: PersonService,
    private carService:CarService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id= this.activatedRoute.snapshot.params.id;
    this.carService.searchByPlaca(id).subscribe(
      data=>{
        this.car=data;
      },
      err =>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000
        });
        
        this.router.navigate(['/dashboard/vercar']);
        
      }
    );
    this.generarQr();
  }
  generarQr():void{
    this.qr= this.commonUrl 
  }

}
