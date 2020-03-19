import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  user: any;
  constructor(private tokenService:TokenService) { 

    //this.user = JSON.parse(localStorage.getItem('user')) ;
     this.tokenService.saveToken('user');
    this.tokenService.getUser();

   // console.log(this.user);
  }

  ngOnInit() {
  }

}
