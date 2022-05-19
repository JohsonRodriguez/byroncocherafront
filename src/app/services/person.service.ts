import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  // movilidadURL = "https://lordbyron-dev.azure-api.net/parking-service/person/"
  movilidadURL = "http://localhost:8081/person/"
  
  

  constructor(private httpClient: HttpClient,private sessionService: SessionService) { }
  private getOptions(): any {
    return {
      headers: {
        'Authorization': `Bearer ${this.sessionService.getSessionToken()}`,
        'Ocp-Apim-Subscription-Key':'fdedf7de7f014ceea33b36bfedd8075e'
      }
    };
  }

  public lista(): Observable<any> {
    return this.httpClient.get<Person[]>(this.movilidadURL + "all",this.getOptions());
  }

  public searchByDni(dni:String):Observable<any>{
    return this.httpClient.get<any>(this.movilidadURL+ `find/${dni}`,this.getOptions());
  }

   public addPerson(person:any):Observable<any>{
    return this.httpClient.post<any>(this.movilidadURL+"add",person,this.getOptions());
  }

  public updatePerson(person:any):Observable<any>{
    return this.httpClient.put<any>(this.movilidadURL+"update",person,this.getOptions());
  }

  public countPerson(): Observable<any> {
    return this.httpClient.get<any>(this.movilidadURL + "count",this.getOptions());
  }

  public addToCar(body:any):Observable<any>{
    return this.httpClient.post<any>(this.movilidadURL+"add-to-car",body,this.getOptions());
  }
  public removeToCar(body:any):Observable<any>{
    return this.httpClient.post<any>(this.movilidadURL+"remove-to-car",body,this.getOptions());
  }

  public listcars(dni:String):Observable<any>{
    return this.httpClient.get<any>(this.movilidadURL+ `cars/${dni}`,this.getOptions());
  }
  public changeState(dni:String, estado:Boolean):Observable<any>{
    const params = new HttpParams()
    .set('dni', dni.toString())
    .set('isEnabled', estado.toString());
    
      return this.httpClient.put<any>(this.movilidadURL+'status',params,this.getOptions());
    }


}
