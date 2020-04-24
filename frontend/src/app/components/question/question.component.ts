import { Component, OnInit } from '@angular/core';
import { QuestionsResponse, Questions } from 'src/app/models/questions';
import { ClientService } from '../../services/client.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  questions: Questions[];
  show: boolean = false;
  index: number = 0;
  button: string = "Next";
  pageLoaded: boolean = false;
  done: boolean = false;
  formQuestion: FormGroup;
  frmControlNames: string[] = [];

  constructor(private clientService: ClientService, private fb: FormBuilder, private router: Router) {
    this.Getquestions(1);
  }

  ngOnInit() {
    this.formQuestion = this.fb.group({

    });
  }

  Getquestions(id_cat): void {
    this.clientService.getQuestions(1).subscribe((data: QuestionsResponse) => {
    this.questions = data.data
      console.log(this.questions.length)
      console.log(data)
    })
  }

  yesClick(): void {
    if (this.index++ <= this.questions.length - 1) {
      this.show = false;
      this.button = "Next";
    } else {
      this.button = "Continue";
      this.done = true;
      this.show = true;
    }
  }

  continueToLegal() {
    this.router.navigate(['client/legalJourney'])
  }
}
