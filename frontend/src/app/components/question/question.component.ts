import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Questions, QuestionsResponse } from 'src/app/models/questions';
import { ClientService } from '../../services/client.service';


@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"],
})
export class QuestionComponent implements OnInit {
  questions: Questions[];
  question: Questions = { id: 0, q_name: "loading" };
  show: boolean = false;
  index: number = 0;
  button: string = "Next";
  pageLoaded: boolean = false;
  done: boolean = false;
  formQuestion: FormGroup;
  frmControlNames: string[] = [];
  busID: any;
  userID: any;
  local: any;

  constructor(
    private clientService: ClientService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.Getquestions();
  }

  ngOnInit() {
    this.formQuestion = this.fb.group({
      answer: ["", []],
    });
  }

  Getquestions(): void {
    this.clientService.getQuestions(1).subscribe((data: QuestionsResponse) => {
      this.questions = data.data;
      this.question = this.questions[this.index];
     
    });
  }

  save() {
    this.answerQuestion();
    this.yesClick();
  }

  answerQuestion() {
    this.local = JSON.parse(localStorage.getItem("Value"));
    let idBus = this.local.id;
    let idUser = this.local.id_user;
    let answer = this.formQuestion.value;
    
    let data = {
      user_answer: answer.answer,
      id_user: idUser,
      id_que: this.question.id,
      id_bus: idBus,
    };
    console.log(data);
    this.clientService.postAnswers(data).subscribe((result) => {
      this.question = this.questions[this.index];
      this.index++ ;
    });
  }


  continueToLegal() {
    this.router.navigate(["client/legalJourney"]);
  }

  yesClick(): void {
    
    if( this.index <= this.questions.length -1 ) {

      console.log('am done')
      this.show = false;
      this.button = "Next";
     

    } else {
      console.log('still going')
      
      this.button = "Continue";
      this.done = true;
      this.show = true;
      this.router.navigate(["client/journey"]);
    }
   
  }


 
}





