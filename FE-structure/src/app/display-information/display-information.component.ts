import { Component, OnInit } from '@angular/core';
import { InformationServiceService } from '../informationService/information-service.service';
import { response } from 'src/models/response';

@Component({
  selector: 'app-display-information',
  templateUrl: './display-information.component.html',
  styleUrls: ['./display-information.component.scss']
})
export class DisplayInformationComponent implements OnInit {

  //supposed to be an array;
   info: any;
   idea : string = '';

  constructor(private information_service:InformationServiceService) {
    this.displayQuestions();
    this.inserIdea(this.idea);
  }

  ngOnInit() {
   
  }

  inserIdea(idea)
  {
    this.information_service.insertBusinessIdea(this.idea)
    .subscribe((data:response) =>{
      this.info = data.data;
      console.log(this.info);
    });
  }
  
  displayQuestions()
  {
    this.information_service.getQuestions()
    .subscribe((data:response) =>{
      this.info = data.data;
      console.log(this.info);
    })
  }
 
 }
