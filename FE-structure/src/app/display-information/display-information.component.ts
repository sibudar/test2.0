import { Component, OnInit } from '@angular/core';
import { InformationServiceService } from '../informationService/information-service.service';

@Component({
  selector: 'app-display-information',
  templateUrl: './display-information.component.html',
  styleUrls: ['./display-information.component.scss']
})
export class DisplayInformationComponent implements OnInit {

  //supposed to be an array;
   info;

  constructor(private information_service:InformationServiceService) {
    this.displayQuestions();
  }

  ngOnInit() {
   
  }
  displayQuestions()
  {
    this.information_service.getQuestions()
    .subscribe(data =>{
      this.info = data
      console.log(data)
    })
  }

 }
