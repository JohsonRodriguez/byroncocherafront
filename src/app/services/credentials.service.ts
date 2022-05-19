import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  rol:String = sessionStorage.getItem('AuthAuthorities');
  name:String = localStorage.getItem('username');
  
  constructor() { }
}
