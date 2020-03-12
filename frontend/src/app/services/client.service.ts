import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url : string = 'http://localhost:5000/api/v1';
  constructor(private http : HttpClient) { }


  public register(user:any) : Observable<any>
  {
    return this.http.post(this.url + '/users', user);
    
  }

  public login(user: any): Observable<any>
  {
    return this.http.post(this.url + '/users/login', user)
  }

  public forgotPassword(user: any): Observable<any>
  {
    return this.http.post(this.url + '/users/forgotPassword', user)
  }

  public resetPassword(user: any): Observable<any>
  {
    return this.http.post(this.url + '/users/resetPassword', user)
  }
}
