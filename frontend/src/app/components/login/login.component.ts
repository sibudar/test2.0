import { Router } from '@angular/router';
import { ToasterService } from './../../services/toaster.service';
import { UserResponse } from 'src/app/models/user';
import { ClientService } from 'src/app/services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   userToken : any;
   isLoggedIn = false;
   isLoginFailed = false;
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private clientService: ClientService, private toastr: ToasterService,private tokenService:TokenService,
             private router: Router) {
   
   }

  
  ngOnInit() {
    this.form = this.formBuilder.group({
      user_password:['',Validators.required],
      email:new FormControl('', [Validators.required, Validators.email])
    });

    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
    }
  }
  login(): void {
    this.clientService.login(this.form.value).subscribe((data: UserResponse) => {
      this.toastr.success('successfully logged in','novelty',2000);
      this.tokenService.saveToken(JSON.stringify(data.data));
      this.tokenService.saveUser(data);
      
      this.userToken = this.tokenService.getToken()
      console.log(this.userToken)

      // this.isLoginFailed = false;
      // this.isLoggedIn = true;
      this.router.navigate(['./client/home']); 
    },error =>{
      console.log(error);
      this.toastr.error(error.error.message || 'Unable to login, please try again later' ,'novelty',10000);
      this.isLoginFailed = true;
 
    });

  }

}
