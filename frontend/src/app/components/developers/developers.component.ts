import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ClientService } from 'src/app/services/client.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginResponse } from 'src/app/models/user';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

  form: FormGroup;
  verified: any;

  constructor(private clientService: ClientService, private formBuilder: FormBuilder, private toastr: ToasterService, private auth: AuthService) { 
    this.verifiedUser();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      domain: new FormControl("", [Validators.required])
    });
  }

  postDomain(): void {
    this.clientService.postDomain(this.form.value).subscribe((res) => {
      this.toastr.success(res.data.domain_Availability, res.data.domain, 6000);
      console.log(res);
    });
  }

  /**
   * Verifies a token.
   */
  verifiedUser() {
    if (this.auth.loggedIn) {
      this.verified = JSON.parse(sessionStorage.getItem("access_token"));
      if (this.verified.auth) {
        this.auth.verifyToken(this.verified.token).subscribe((data: LoginResponse) => {
          this.updateTrack(data.id);
        });
      }
    }
  }

  updateTrack(id) {
    this.clientService.notNewUers(id).subscribe((data) => {
      console.log(data);
    })
  }

}
