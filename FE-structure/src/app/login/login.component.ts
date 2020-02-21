import { Component, OnInit } from '@angular/core';
import { RestService } from '../shared/rest.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private service:RestService, private formBuilder:FormBuilder, private toastr: ToastrService ) { }


  loginUser(user){
    this.service.login(user).subscribe(data =>{
       console.log(data);
       this.showToaster();
  
    },error =>{
      this.toastr.error("Unable to login",'Welcome To Novelty',{
        timeOut: 10000,
        positionClass: 'toast-top-right',
        }); 
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
  
  showToaster(){
    this.toastr.success("You have successfully logged in ",'Welcome To Novelty',{
    timeOut: 10000,
    positionClass: 'toast-top-right',
    }); 
}

}
