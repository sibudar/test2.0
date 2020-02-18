import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  url: String = 'http://localhost:5000/api/v1'

  constructor(private http: HttpClient) { }

  // adds user 
  public adduser(user) {
    return this.http.post(this.url + '/users/register', user)
  }

  public login(user){
    return this.http.post(this.url + '/users/login',user)
  }




}
