import { Router } from '@angular/router';
import { ToasterService } from './../../services/toaster.service';
import { UserResponse } from 'src/app/models/user';
import { ClientService } from 'src/app/services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';



@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  userToken: any;
  isLoggedIn = false;
  isLoginFailed = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToasterService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      user_password: ["", Validators.required],
      email: new FormControl("", [Validators.required, Validators.email])
    });
  }

  login(): void {
    this.auth.login(this.form.value).subscribe((data) => {
      this.toastr.success('successfully logged in','novelty',2000);
      this.router.navigate(['client/display']); 
    },error =>{
      console.log(error);
      this.toastr.error('Unable to login, please try again later' ,'novelty',10000);
      this.isLoginFailed = true;
    });
  }
}
