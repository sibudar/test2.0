import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  token: any;
  verify: any;
  user: any;
  
  constructor(private auth: AuthService) {
    this.tokenGetter();
    // this.user = JSON.parse(sessionStorage.getItem("user"));
    console.log(this.user);
  }

  ngOnInit() {}

  tokenGetter() {
    this.token = this.auth.loggedIn;
    this.user = this.auth.verifyToken(this.token);
    return this.user;
  }
}
