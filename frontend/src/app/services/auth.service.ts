import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  
  url: string = "http://localhost:5000/api/v1";
  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post(this.url + '/users/login', user)
    .pipe(map(result => {
      console.log(result);
      sessionStorage.setItem("access_token", JSON.stringify(result));
      return user;
    }), catchError(error => {
      return throwError('Something went wrong!');
    }));
  }

  verifyToken(token) {
    return this.http.get(this.url + "/users/me", token);
  }

  logout() {
    sessionStorage.removeItem("access_token");
  }

  public get loggedIn(): boolean {
    return sessionStorage.getItem("access_token") !== null;
  }
}
