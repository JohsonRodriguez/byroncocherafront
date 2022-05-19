import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  
  menuItems?:any[];
  constructor(
    private sidebarService:SidebarService,
    private router:Router, private sessionService: SessionService) { 
    this.menuItems=sidebarService.menu;
  }
  
  ngOnInit(): void {
  }

  

}
