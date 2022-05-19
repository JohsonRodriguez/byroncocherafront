import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { Checkin } from '../models/checkin';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  // endpoint = "https://lordbyron-dev.azure-api.net/parking-service/register/"
  endpoint = "http://localhost:8081/register/"

  constructor(private httpClient: HttpClient,private sessionService: SessionService) {  }
  private getOptions(): any {
    return {
      headers: {
        'Authorization': `Bearer ${this.sessionService.getSessionToken()}`,
        'Ocp-Apim-Subscription-Key':'fdedf7de7f014ceea33b36bfedd8075e'
      }
    };
  }

  public lista(day:string): Observable<any> {
    
    return this.httpClient.get<Register[]>(this.endpoint + "searchday/"+ day);
  }
 
  public addCheckin(checkin:Checkin):Observable<any>{
    return this.httpClient.post<any>(this.endpoint+"save",checkin);
  }

  public addCheckout(checkin:Checkin):Observable<any>{
    return this.httpClient.post<any>(this.endpoint+"checkout",checkin);
  }

  public countRegister(): Observable<any> {
    return this.httpClient.get<any>(this.endpoint + "count");
  }
  public searchById(id:any):Observable<any>{
    return this.httpClient.get<Register>(this.endpoint+ `find/${id}`);
  }

  public countParking(): Observable<any> {
    return this.httpClient.get<any>(this.endpoint + "free");
  }
  public searchCarbyDay(registrationplate:string): Observable<any> {
    
    return this.httpClient.get<Register[]>(this.endpoint + "searchplate/" + registrationplate);
  }
  
 
}
