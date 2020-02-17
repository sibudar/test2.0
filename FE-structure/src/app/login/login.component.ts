import { Component, OnInit } from '@angular/core';
import { RestService } from '../shared/rest.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private service:RestService, private formBuilder:FormBuilder ) { }


  loginUser(user){
    this.service.login(user).subscribe(data =>{
       console.log(data);
     
    })
  }

  login(){
    this.loginUser(this.form.value)
  }


  ngOnInit() {
    this.form = this.formBuilder.group({
      user_password:['',Validators.required],
      email:new FormControl('', [Validators.required, Validators.email])
    });
   
  }
  
  

}
