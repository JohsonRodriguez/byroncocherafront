import { Injectable } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';
@Injectable({
  providedIn: 'root'
  
})
export class SidebarService {
  
  // public currentUser  = localStorage.getItem('rol');
  // public currentUser  = credentialsService.rol;
 //creación de menus por nfor    
  menu: any[] = [{

    submenu: [
      { titulo: 'Inicio', url: 'dashboard',icono:'nav-icon fas fa-tachometer-alt',user:'ROLE_USER' },
      { titulo: 'Usuarios', url: 'users',icono:'nav-icon fas fa-user-circle', user:'ROLE_ADMIN'},
      { titulo: 'Conductores', url: 'persons',icono:'nav-icon fas fa-user-friends', user:'ROLE_ADMIN'},
      { titulo: 'Autos', url: 'cars',icono:'nav-icon fas fa-car', user:'ROLE_ADMIN'},
      { titulo: 'Asignar Vehiculo', url: 'addtocar',icono:'nav-icon fas fa-id-card-alt', user:'ROLE_ADMIN'},
      { titulo: 'Registros', url: 'register',icono:'fas fa-calendar-alt nav-icon' ,user:'ROLE_USER'},
      
      // { titulo: 'Mis datos personales', url: '',icono:'fas fa-user-circle nav-icon' },
      // { titulo: 'Preguntas Frecuentes', url: '',icono:'fas fa-question-circle nav-icon' }
    ]

  }];

  menux: any[] = [{

    titulo: 'Reportes',
    icono: '"nav-icon fas fa-file-invoice',
    user:'ROLE_ADMIN',
    submenux: [
      { titulo: 'Lista de Vehiculos', url: 'reportcars' },
      { titulo: 'Lista de Personas', url: 'reportperson' },
      { titulo: 'Vehiculos por persona', url: 'reportcarsbyperson' },
      { titulo: 'Registros por dia', url: 'reportregister' },
    ]

  }];
  
    

  

  constructor(
    
  ) { }
  
}
