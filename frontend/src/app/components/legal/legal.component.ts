import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { QuestionsResponse , Questions } from 'src/app/models/questions';
import { ContentResponse, Content } from 'src/app/models/content';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {

  questions: Questions[];
  content: Content[];
  contentShow: Content;
  show: boolean = false ;
  index: number = 0 ;
  button: string = 'Yes' ; 
  pageLoaded: boolean = false ;
  done: boolean = false ;

  constructor(private clientService: ClientService) { 
    this.Getquestions(2) ; 
    this.Getcontent(2) ; 
   
  }

  ngOnInit() {
  }


  Getquestions(id_cat): void{

    this.clientService.getQuestions(2).subscribe((data:QuestionsResponse) =>{
      this.questions = data.data
      console.log(this.questions.length)
      console.log(data)
    })
    
  }

  Getcontent(id_cat): void {

    this.clientService.getContent(2).subscribe((data:ContentResponse) =>{
    this.content = data.data;
    this.contentShow = this.content[this.index] ;
      this.pageLoaded = true ; 
     })
  }


  noClick(): void {
  
    this.contentShow = this.content[this.index] ;
    this.show = true ;
    this.button = 'Next'
    console.log(this.contentShow) 
    // #f3f3f3
  }

  yesClick(): void {

    if(this.index++ <= this.questions.length - 1) {
        this.show = false ;
        this.button = 'Yes' ;
    }else {
        this.button = 'Head to finance' ; 
        this.done = true ; 
    }

  }

}
