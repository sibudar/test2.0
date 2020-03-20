import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http:HttpClient) { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    
  }

  public getToken(): string {
   
    
    return  window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    
  }

  public getUser() {
    
   return JSON.parse(sessionStorage.getItem('data'));
  }
}
