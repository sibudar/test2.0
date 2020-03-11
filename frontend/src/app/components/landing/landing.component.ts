import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  user: any;
  constructor() { 

    this.user = JSON.parse(localStorage.getItem('user')) ;

    console.log(this.user);
  }

  ngOnInit() {
  }

}
