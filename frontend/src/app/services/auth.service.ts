import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  
  url: string = "http://localhost:5000/api/v1";
  constructor(private http: HttpClient) {}

  login(user: any): Observable<boolean> {
    return this.http.post<{ token: string }>(this.url + "/users/login", {
        email: user.email,
        password: user.user_password
      }).pipe(map(result => {
          sessionStorage.setItem("access_token", result.token);
          return true;
        })
      );
  }

  logout() {
    sessionStorage.removeItem("access_token");
  }

  public get loggedIn(): boolean {
    return sessionStorage.getItem("access_token") !== null;
  }
}
