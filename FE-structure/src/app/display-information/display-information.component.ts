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
   idea : string ;
  descript: string;
   userData: string;
   saveIdea: [];

  constructor(private information_service:InformationServiceService) {
   
    this.inserIdea();
    //this.listOfIdeas();
    this.displayQuestions();
    this.userData=localStorage.getItem('id');
    

    
    
    
  }

  ngOnInit() {
   
  }

  inserIdea()
  {
    var userData1 = JSON.parse(this.userData)
    //console.log(userData1);
  this.information_service.insertBusinessIdea({'busin_idea':this.idea,'descript':this.descript,'id_user':userData1.id})
    .subscribe((data:response) =>{
      this.info = data.data;
      console.log(data);

    });
  }
  // var userData1 = JSON.parse(this.userData)
  // listOfIdeas()
  // {

  // }
  displayQuestions()
  {
    this.information_service.getQuestions()
    .subscribe((data:response) =>{
      this.info = data.data;
      console.log(this.info);
    })
  }
 
 }
