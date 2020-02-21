import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, } from '@angular/forms'
import { PasswordValidation } from './password-validator';
import { RestService } from '../shared/rest.service';
import { ToastrService } from 'ngx-toastr';




export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {

form:FormGroup;


  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  
  constructor(private formBuilder:FormBuilder , private service:RestService, private toastr: ToastrService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      user_password:['',Validators.required],
      confirm_password:['',Validators.required],
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:new FormControl('', [Validators.required, Validators.email])
    },{
     validator:PasswordValidation.MatchPassword
    });
    
  }

  submit(){
    let json: any = this.form.value; 
    console.log(json)
    delete json.confirm_password;
     this.register(json);
  
  }
   
   register(user){
    this.service.adduser(user).subscribe(data =>{
    console.log(data);
<<<<<<< HEAD
    this.showToaster()
    },error =>{
      this.toastr.error("Unable to register",'Welcome To Novelty',{
        timeOut: 10000,
        positionClass: 'toast-top-right',
        });
    })  
=======

    
    })
      
>>>>>>> 4aae34afd49946fe7aa904da5bc0dfecd5798c39
  }

  showToaster(){
    this.toastr.success("You have successfully created an account",'Welcome To Novelty',{
    timeOut: 10000,
    positionClass: 'toast-top-right',
    }); 
}

}
