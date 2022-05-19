import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbsComponent
   
  ],
  exports:[ NavbarComponent,
    SidebarComponent,
    FooterComponent,
  BreadcrumbsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
