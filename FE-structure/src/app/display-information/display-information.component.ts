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
   ideas:any;

  constructor(private information_service:InformationServiceService) {
    this.displayQuestions();
    this.userData=localStorage.getItem('id');
    this.getUserIdeas();
    
   
  }

  ngOnInit() {
   
  }

  inserIdea()
  {
    var userData1 = JSON.parse(this.userData);
    //console.log(userData1);
    this.information_service.insertBusinessIdea({'busin_idea':this.idea,'descript':this.descript,'id_user':userData1.id})
    .subscribe((data:response) =>{
      this.info = data.data;
      console.log(data);

    });
  }

  getUserIdeas()
  {
    var userData1 = JSON.parse(this.userData);
    // this.information_service.getIdeas({'id_user':userData1.id})
    // .subscribe((data:response)=>{
    //   this.info = data;
    //   console.log(data);
    // });
    this.information_service.getIdeas({'id_user':userData1.id}).subscribe((data) =>{
    this.ideas=data ;
    console.log(data);
   

    })

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
