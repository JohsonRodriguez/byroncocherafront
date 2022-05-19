import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  token: string;

  constructor(private httpClient: HttpClient,private cookies: CookieService) { 
    this.token = '';
  }

  setSessionToken(token: string): void {
    if (_.isEmpty(this.getSessionToken())) {
      this.cookies.set('session-token', token);
    }
  }
  getSessionToken(): string {
    if (_.isEmpty(this.token)) {
      this.token = this.cookies.get('session-token');
    }
    return this.token;
  }
  
  deleteSession(): void {
    this.cookies.delete('session-token');
    this.cookies.deleteAll();
    this.cookies.deleteAll('/');
    this.cookies.deleteAll('/dashboard');
  }
}
