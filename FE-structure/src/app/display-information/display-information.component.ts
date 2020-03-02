import { Component, OnInit } from '@angular/core';
import { InformationServiceService } from '../informationService/information-service.service';

@Component({
  selector: 'app-display-information',
  templateUrl: './display-information.component.html',
  styleUrls: ['./display-information.component.scss']
})
export class DisplayInformationComponent implements OnInit {

  //supposed to be an array;
  public info_questions;

  constructor(private information_service:InformationServiceService) {}

  ngOnInit() {
     this.information_service.getQuestions()
     .subscribe(data => this.info_questions = data);
  }

}
