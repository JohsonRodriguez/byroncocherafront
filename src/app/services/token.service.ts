import { Injectable } from '@angular/core';

const TOKEN_KEY = "AuthToken";
const USER_KEY = "AuthuSER";
const NAME_KEY = "AuthuName";
const AUTHORITIES_KEY = "AuthAuthorities";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<string> = [];

  constructor() { }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);

  }

  public setnombreUsuario(nombreUsuario: string): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, nombreUsuario);
  }

  public setNombre(nombre: string): void {
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, nombre);
  }

  public getnombreUsuario(): string {
    return sessionStorage.getItem(USER_KEY);
  }
  public getNombre(): string {
    return sessionStorage.getItem(NAME_KEY);
  }
  
  public setAuthorities(authorities: string): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, authorities);
  }

  public getAuthorities(): string[]{
    this.roles=[];
    if(sessionStorage.getItem(AUTHORITIES_KEY)){
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).foreach( authority => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  public logout():void{
    window.sessionStorage.clear();
  }
}
