import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Addrol } from '../models/addrol';
import { Edituser } from '../models/edituser';
import { Password } from '../models/password';
import { Users } from '../models/users';
import { SessionService } from './session.service';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  // movilidadURL = "https://lordbyron-dev.azure-api.net/users-service/api/"
  movilidadURL = "http://localhost:8081/auth/"
  constructor(private httpClient: HttpClient,private sessionService: SessionService){ 
    
     
  }
  private getOptions(): any {
    return {
      headers: {
        'Authorization': `Bearer ${this.sessionService.getSessionToken()}`,
        'Ocp-Apim-Subscription-Key':'fdedf7de7f014ceea33b36bfedd8075e'
      }
    };
  }

  public lista(): Observable<any> {
    return this.httpClient.get<Users[]>(this.movilidadURL + "users/list");
  }

   public addUser(user:any):Observable<any>{
    return this.httpClient.post<any>(this.movilidadURL+"users",user);
  }

  public addRol(rol:any):Observable<any>{
    return this.httpClient.post<Addrol[]>(this.movilidadURL + "roles/add-to-user",rol);
  }
  public searchByUsername(nombreUsuario:String):Observable<any>{
    return this.httpClient.get<Users>(this.movilidadURL+ `users?nombreUsuario=${nombreUsuario}`);
  }

  public updateUser(edituser:Edituser):Observable<any>{
    return this.httpClient.put<any>(this.movilidadURL+"users/update",edituser);
  }

 public changeState(username:String, estado:Boolean):Observable<any>{
  const params = new HttpParams()
  .set('username', username.toString())
  .set('isEnabled', estado.toString());
  
    return this.httpClient.put<any>(this.movilidadURL+'users/status',params);
  }

  public ChangePassword(password:Password):Observable<any>{
    return this.httpClient.post<Password[]>(this.movilidadURL + "users/change-password",password);
  }

  public DeleteRol(rol:Rol):Observable<any>{
    return this.httpClient.post<Rol[]>(this.movilidadURL + "roles/remove-from-user",rol);
  }

  public AddRol(rol:Rol):Observable<any>{
    return this.httpClient.post<Rol[]>(this.movilidadURL + "roles/add-to-user",rol);
  }
  

  


}