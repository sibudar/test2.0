import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  url: String 

  constructor(private http: HttpClient) { 

  this.url=environment.api

  }

  // adds user 
  public adduser(user) {
    return this.http.post(this.url + '/users/register', user)
  }

  public login(user){
    return this.http.post(this.url + '/users/login',user)
  }

  // forgot password
  public setPassword(email){
    return this.http.post(this.url + '/users/forgot-password',email)
    
  }

  public getToken(user_password , token){
    return this.http.post(this.url + '/reset', user_password)
  }
  


}
