import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PersonsComponent } from './persons/persons.component';
import { RegisterComponent } from './register/register.component';
import { NewpersonComponent } from './persons/newperson/newperson.component';
import { EditpersonComponent } from './persons/editperson/editperson.component';
import { DetailpersonComponent } from './persons/detailperson/detailperson.component';
import { NewregisterComponent } from './register/newregister/newregister.component';
import { CarComponent } from './car/car.component';
import { NewcarComponent } from './car/newcar/newcar.component';
import { DetailcarComponent } from './car/detailcar/detailcar.component';
import { EditcarComponent } from './car/editcar/editcar.component';
import { DetailregisterComponent } from './register/detailregister/detailregister.component';
import { ReportcarsComponent } from './reports/reportcars/reportcars.component';
import { ReportpersonsComponent } from './reports/reportpersons/reportpersons.component';
import { ReportcarsbypersonComponent } from './reports/reportcarsbyperson/reportcarsbyperson.component';
import { ReportbydayComponent } from './reports/reportbyday/reportbyday.component';
import { UserComponent } from './user/user.component';
import { NewuserComponent } from './user/newuser/newuser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { AuthGuard } from '../auth/auth.guard';
import { LoginComponent } from '../auth/login/login.component';
import { AddtocarComponent } from './persons/addtocar/addtocar.component';
import { NewpasswordComponent } from './user/newpassword/newpassword.component';
import { NewrolComponent } from './user/newrol/newrol.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
  path: 'dashboard', component: PagesComponent,
  canActivate: [AuthGuard],
  children: [
   {path: 'dashboard',component:DashboardComponent},
   {path: 'persons',component:PersonsComponent},
   {path: 'users',component:UserComponent},
   {path: 'newuser',component:NewuserComponent},
   {path: 'edituser/:username',component:EdituserComponent},
   {path: 'newpassword/:username',component:NewpasswordComponent},
   {path: 'newrol/:username',component:NewrolComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'newregister',component:NewregisterComponent},
  {path: 'edit/:id',component:EditpersonComponent},
  {path: 'ver/:id',component:DetailpersonComponent},
  {path: 'cars',component:CarComponent},
  {path:'newperson',component:NewpersonComponent},
  {path:'newcar',component:NewcarComponent},
  {path:'addtocar',component:AddtocarComponent},
  {path:'reportcars',component:ReportcarsComponent},
  {path:'reportperson',component:ReportpersonsComponent},
  {path:'reportregister',component:ReportbydayComponent},
  {path:'reportcarsbyperson',component:ReportcarsbypersonComponent},
  {path: 'vercar/:id',component:DetailcarComponent},
  {path: 'editcar/:id',component:EditcarComponent},
  {path: 'verregister/:id',component:DetailregisterComponent},
  
  
  ]}
  ,  {path: '**', pathMatch: 'full', redirectTo: 'login'}
  
];


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
