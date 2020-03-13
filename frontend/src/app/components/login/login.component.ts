import { Router } from '@angular/router';
import { ToasterService } from './../../services/toaster.service';
import { UserResponse } from 'src/app/models/user';
import { ClientService } from 'src/app/services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private clientService: ClientService, private toastr: ToasterService,
             private router: Router) {
   
   }

  
  ngOnInit() {
    this.form = this.formBuilder.group({
      user_password:['',Validators.required],
      email:new FormControl('', [Validators.required, Validators.email])
    });
  }
  login(): void {
    this.clientService.login(this.form.value).subscribe((data: UserResponse) => {
      console.log(data)
      this.toastr.success('successfully logged in','novelty',2000)
      localStorage.setItem('user', JSON.stringify(data.data));
      this.router.navigate(['/client/home']); 
    },error =>{
      console.log(error);
      this.toastr.error(error.error.message || 'Unable to login, please try again later' ,'novelty',10000)
    });

  }

}
