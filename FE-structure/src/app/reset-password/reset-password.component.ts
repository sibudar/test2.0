import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { RestService } from '../shared/rest.service';
import { response } from 'src/models/response';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  message = false;
  msg:string 

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  
  constructor( private service:RestService) { }

  ngOnInit() {
  }

  forgotpass(){
    let json = {email:this.email.value}
    this.service.setPassword(json).subscribe((data:response) =>{
      console.log(data.message)
      this.msg = data.message
      this.message=true;
    },error =>{
      console.log(error)
    });
   
    
  }



}
