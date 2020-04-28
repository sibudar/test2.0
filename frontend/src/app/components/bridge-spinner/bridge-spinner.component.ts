import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { LoginResponse } from 'src/app/models/user';
import { filter } from "rxjs/operators";

@Component({
  selector: "app-bridge-spinner",
  templateUrl: "./bridge-spinner.component.html",
  styleUrls: ["./bridge-spinner.component.scss"],
})
export class BridgeSpinnerComponent implements OnInit {
  verified: any;
  user: Object;
  trackLink: ArrayBuffer;
  link: string;
  checkLength: any;
  constructor(private clientService: ClientService, private auth: AuthService,private router: Router) {
    this.verifiedUser();
  }

  ngOnInit() {}

  /**
   * Verifies a token.
   */
  verifiedUser() {
    if (this.auth.loggedIn) {
      this.verified = JSON.parse(sessionStorage.getItem("access_token"));
      if (this.verified.auth) {
        this.auth.verifyToken(this.verified.token).subscribe((data: LoginResponse) => {
          this.routeLastVisited(data);
          this.update(data.id);
        });
      }
    }
  }

  routeLastVisited(id) {
    if(id.data.new_user == 1) {
      this.clientService.getLink(id.data.id).subscribe((data) => {
        this.checkLength = data;
        if(Object.keys(this.checkLength.data).length < 1) {
          let first = { user_id: id.data.id, link: "client/display" };
          this.clientService.start(first).subscribe((e) => {
            console.log(e);
          });
          this.update(this.checkLength.data[0].id);
          this.router.navigate(["client/display"]);
        } else {
          this.update(this.checkLength.data[0].id);
          this.router.navigate([this.checkLength.data[0].link]);
        }
      });
    } else {
      this.router.navigate(["client/dashboard"]);
    }
  }

  update(id) {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
      this.link = e.url;
      let data = {
        user_id: id,
        link: this.link,
      };
      this.clientService.tracking(data).subscribe((results) => {
        console.log(results);
      });
    });
  }
}
