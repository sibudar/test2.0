import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms'
import { PasswordValidation } from './password-validator';
import { RestService } from '../shared/rest.service';



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

  
  constructor(private formBuilder:FormBuilder , private service:RestService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      user_password:['',Validators.required],
      confirm_password:['',Validators.required],
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:['',Validators.required]
    },{
     validator:PasswordValidation.MatchPassword
    });
    
  }

  submit(){

    let json: any = this.form.value; 

    
    delete json.confirm_password;

    this.register(json);
  }

   register(user){
    this.service.adduser(user).subscribe(data =>{
    console.log(data);
    })
      
  }

}
