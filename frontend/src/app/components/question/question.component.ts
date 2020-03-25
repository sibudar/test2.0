import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { QuestionsResponse } from 'src/app/models/questions';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit {
  formQuestion: FormGroup;
  questions: any;
  answers: string[];
  frmControlNames: string[] = [];
  userData: string;
  userID: string ; 
  busID: string;
  
  constructor(
      private clientService:ClientService,
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) data) {

  }

  ngOnInit() {
    
    this.dialogRef.updateSize('60%', '80%');
    this.formQuestion = this.fb.group({});
    
    this.clientService.getQuestions(1).subscribe((data:QuestionsResponse) => {
    console.log(data);
      this.questions = data.data; 
     
      let i = 0; 
      this.questions.forEach(element => {
        this.formQuestion.addControl(element.id, new FormControl('', Validators.required));
        i++ ;
      });
    })
    console.log(this.formQuestion.value);
  }

  save() {
    console.log(this.formQuestion.value);
    this.dialogRef.close(this.formQuestion.value);
   if(this.busID != undefined) {
      this.answerQuestion()
    }
  }

  close() {
    this.dialogRef.close();
  }
  
  displayQuestions() {
    return this.clientService.getQuestions(2)
  }
  
  answerQuestion() {
    let idUser = this.userID;
    let idBus = this.busID;
    let serviceClient = this.clientService;
    let fromQuiz: any = this.formQuestion.value
    
    this.questions.forEach(element => {
      
      let data = {
        "user_answer": fromQuiz[element.id],
        "id_user": idUser,
        "id_bus": idBus,
        "id_que": element.id
      }
      let service = serviceClient.postAnswers(data);
      service.subscribe((result) => {
        console.log(result);
      })
    });
  }
}