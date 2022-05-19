import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Car} from '../models/car';
import {Brand} from '../models/brand';
import { SessionService } from 'src/app/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  // movilidadURL = "https://lordbyron-dev.azure-api.net/parking-service/car/"
  movilidadURL = "http://localhost:8081/car/"

  constructor(private httpClient: HttpClient,private sessionService: SessionService) { }
  private getOptions(): any {
    return {
      headers: {
        'Authorization': `Bearer ${this.sessionService.getSessionToken()}`,
        'Ocp-Apim-Subscription-Key':'fdedf7de7f014ceea33b36bfedd8075e'
      }
    };
  }
  // public lista(): Observable<Car[]> {
  //   return this.httpClient.get<Car[]>(`${this.movilidadURL} + "all"`,this.getOptions());
   
  // }
  public lista(): any{
    return this.httpClient.get<Car[]>(this.movilidadURL + "all",this.getOptions());
   
  }

  public addCar(car:Car):Observable<any>{
    return this.httpClient.post<any>(this.movilidadURL+"add",car,this.getOptions());
  }

  // public searchByPlaca(plate:String):Observable<Car>{
  //   return this.httpClient.get<Car>(this.movilidadURL+ `findcar/${plate}`,this.getOptions());
  // }
  public searchByPlaca(plate:String):Observable<any>{
    return this.httpClient.get<Car>(this.movilidadURL+ `findcar/${plate}`,this.getOptions());
  }

  public updateCar(car:Car):Observable<any>{
    return this.httpClient.put<any>(this.movilidadURL+"update",car,this.getOptions());
  }
  public countCar(): Observable<any> {
    return this.httpClient.get<any>(this.movilidadURL + "count",this.getOptions());
  }
  public models(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>("https://johsonrodriguez.github.io/apiautos/marca.json");
  }

}
