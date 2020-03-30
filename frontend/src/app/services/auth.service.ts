import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  
  url: string = "http://localhost:5000/api/v1";
  constructor(private http: HttpClient) {}

  // login(email: string, password: string): Observable<boolean> {
  //   return this.http.post<{ token: string }>(this.url + "/users/login", {
  //       email: email,
  //       password: password
  //     }).pipe(map(result => {
  //         sessionStorage.setItem("access_token", result.token);
  //         return true;
  //       })
  //     );
  // }

  logout() {
    localStorage.removeItem("access_token");
  }

  public get loggedIn(): boolean {
    return localStorage.getItem("access_token") !== null;
  }
}
