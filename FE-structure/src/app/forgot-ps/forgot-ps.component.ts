import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from '../register/password-validator';

@Component({
  selector: 'app-forgot-ps',
  templateUrl: './forgot-ps.component.html',
  styleUrls: ['./forgot-ps.component.scss']
})
export class ForgotPsComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      user_password:['',Validators.required],
      confirm_password:['',Validators.required]
    },{
     validator:PasswordValidation.MatchPassword
    });
  }

}
