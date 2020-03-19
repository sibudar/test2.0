import { Injectable } from '@angular/core';


// const TOKEN_KEY = 'auth-token';
// const USER_KEY = 'auth-user';
let user:any;

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  signOut() {
    //sessionStorage.clear();
    localStorage.clear();
  }

  public saveToken(user: string) {
    // sessionStorage.removeItem(TOKEN_KEY);
    // sessionStorage.setItem(TOKEN_KEY, token);
    localStorage.removeItem(user);
    localStorage.setItem('userdata',user);
  }

  public getToken(): string {
    //console.log("the token is the following")
    return "the token is the following" + localStorage.getItem(user);
  }

  public saveUser(user) {
    // sessionStorage.removeItem(USER_KEY);
    // sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.removeItem(user);
    localStorage.setItem('user', JSON.stringify('user',user));
  }

  public getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
