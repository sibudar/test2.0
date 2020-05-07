import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ClientService } from 'src/app/services/client.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoginResponse, UserResponse } from 'src/app/models/user';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

  form: FormGroup;
  verified: any;
  user: LoginResponse = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    new_user: 1,
  };

  constructor(private clientService: ClientService, private formBuilder: FormBuilder, private toastr: ToasterService, private auth: AuthService) { 
  }

  ngOnInit() {
    this.verifyUser();
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
   verifyUser() {
    if(this.auth.loggedIn) {
      let verified = JSON.parse(sessionStorage.getItem("access_token"));
      this.auth.verifyToken(verified.token).subscribe((res: UserResponse) => {
        this.user = res.data;
        this.updateTrack(this.user.id);
        console.log(this.user);
      });
    }
  }

  /**
   * Update that this is not a new user.
   * @param id user's id.
   */
  updateTrack(id) {
    this.clientService.notNewUers(id).subscribe((data) => {
      console.log(data);
    })
  }
}
