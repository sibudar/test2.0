import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from '../register/password-validator';
import {ActivatedRoute} from "@angular/router";
import { RestService } from '../shared/rest.service';

@Component({
  selector: 'app-forgot-ps',
  templateUrl: './forgot-ps.component.html',
  styleUrls: ['./forgot-ps.component.scss']
})
export class ForgotPsComponent implements OnInit {

  form:FormGroup;
  token: string;
  

  constructor(private route: ActivatedRoute, private formBuilder:FormBuilder, private service:RestService) { 
    this.route.params.subscribe( params => {
      this.token = params.token;
    }
    
    )
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      user_password:['',Validators.required],
      confirm_password:['',Validators.required]
    },{
     validator:PasswordValidation.MatchPassword
    });
  }

forgot(){
let detail={ token:this.token, user_password:this.form.value.user_password}
this.service.getToken(detail).subscribe(data=>{
  console.log(data)
})

}
}
