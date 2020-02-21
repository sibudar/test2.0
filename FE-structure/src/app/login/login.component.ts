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
<<<<<<< HEAD
  constructor(private service:RestService, private formBuilder:FormBuilder, private toastr: ToastrService ) { }
=======
  constructor(private service:RestService, private formBuilder:FormBuilder,private toastr: ToastrService ) { }
>>>>>>> 9d7de7dfc5e104ef1fbd037645a1c1c00b421b24


  loginUser(user){
    this.service.login(user).subscribe(data =>{
      this.showSuccess();
       console.log(data);
<<<<<<< HEAD
       this.showToaster();
  
    },error =>{
      this.toastr.error("Unable to login",'Welcome To Novelty',{
        timeOut: 10000,
        positionClass: 'toast-top-right',
        }); 
=======
      
     
    },error=>{
      this.toastr.error('Unable to log in','Welcome To Novelty',{
        timeOut: 5000,
        positionClass: 'toast-top-right',
      })
>>>>>>> 9d7de7dfc5e104ef1fbd037645a1c1c00b421b24
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
  
<<<<<<< HEAD
  showToaster(){
    this.toastr.success("You have successfully logged in ",'Welcome To Novelty',{
    timeOut: 10000,
    positionClass: 'toast-top-right',
    }); 
}
=======
  showSuccess() {
    this.toastr.success('You have successfully logged in', 'Welcome To Novelty',{
      timeOut: 5000,
      positionClass: 'toast-top-right',
    });
  }
>>>>>>> 9d7de7dfc5e104ef1fbd037645a1c1c00b421b24

}
