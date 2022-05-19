import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PersonsComponent } from './persons/persons.component';
import { RegisterComponent } from './register/register.component';
import { NewpersonComponent } from './persons/newperson/newperson.component';
import { FormsModule } from '@angular/forms';
import { EditpersonComponent } from './persons/editperson/editperson.component';
import { DetailpersonComponent } from './persons/detailperson/detailperson.component';
import { NewregisterComponent } from './register/newregister/newregister.component';
import { CarComponent } from './car/car.component';
import { DetailcarComponent } from './car/detailcar/detailcar.component';
import { EditcarComponent } from './car/editcar/editcar.component';
import { FilterpersonPipe } from '../pipes/filterperson.pipe';
import { FiltercarPipe } from '../pipes/filtercar.pipe';
import { FilterregisterPipe } from '../pipes/filterregister.pipe';
import { ReportbydayComponent } from './reports/reportbyday/reportbyday.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { DetailregisterComponent } from './register/detailregister/detailregister.component';
import { ReportcarsComponent } from './reports/reportcars/reportcars.component';
import { ReportpersonsComponent } from './reports/reportpersons/reportpersons.component';
import { ReportcarsbypersonComponent } from './reports/reportcarsbyperson/reportcarsbyperson.component';
import { NewuserComponent } from './user/newuser/newuser.component';
import { UserComponent } from './user/user.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { FilteruserPipe } from '../pipes/filteruser.pipe';
import { AddtocarComponent } from './persons/addtocar/addtocar.component';
import { EstadoPipe } from '../pipes/estado.pipe';
import { NewpasswordComponent } from './user/newpassword/newpassword.component';
import { NewrolComponent } from './user/newrol/newrol.component';








@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    PersonsComponent,
    RegisterComponent,
    NewpersonComponent,
    EditpersonComponent,
    DetailpersonComponent,
    NewregisterComponent,
    CarComponent,
    DetailcarComponent,
    EditcarComponent,
    FilterpersonPipe,
    FiltercarPipe,
    FilteruserPipe,
    FilterregisterPipe,
    ReportbydayComponent,
    DetailregisterComponent,
    ReportcarsComponent,
    ReportpersonsComponent,
    ReportcarsbypersonComponent,
    NewuserComponent,
    UserComponent,
    EdituserComponent,
    AddtocarComponent,
    EstadoPipe,
    NewpasswordComponent,
    NewrolComponent,
    
    
  ],
  exports:[
    DashboardComponent,
    RegisterComponent,
    PersonsComponent,
    NewpersonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    AutocompleteLibModule,// autocomplete
  ]
})
export class PagesModule { }
