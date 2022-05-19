import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Person } from 'src/app/models/person';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-detailperson',
  templateUrl: './detailperson.component.html',
  styleUrls: ['./detailperson.component.css']
})
export class DetailpersonComponent implements OnInit {
   person: Person=null;

  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id= this.activatedRoute.snapshot.params.id;
    this.personService.searchByDni(id).subscribe(
      data=>{
        this.person=data;
      },
      err =>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000
        });
        
        this.router.navigate(['/dashboard/ver']);
        
      }
    );
    }

}
