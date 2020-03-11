import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserResponse } from 'src/app/models/user';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  form: any;
  

  constructor(private clientService: ClientService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email:new FormControl('', [Validators.required, Validators.email])
    });
  }

  forgotpassword(){
    this.clientService.forgotPassword(this.form.value).subscribe((data: UserResponse)=> {
      console.log(data)
    })
    // console.log(this.form.value)

  }
}
