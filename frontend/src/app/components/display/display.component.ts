import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ClientService } from 'src/app/services/client.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogComponent } from '../dialog/dialog.component';
import { UserResponse } from 'src/app/models/user';
import { QuestionComponent } from '../question/question.component';
import { QuestionsResponse } from 'src/app/models/questions';
import { ContentResponse } from 'src/app/models/content';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.scss"]
})
export class DisplayComponent implements OnInit {
  user: any;
  verified: any;
  found = false;
  ideas: any;
  businessIdea: string;
  description: string;
  questions: any;
  id_cat: any;
  content: any;
  contentShow: any;
  show = false;

  constructor(private clientService: ClientService, private auth: AuthService, private dialog: MatDialog) {
    this.user = this.verifiedUser();
    this.getUserIdeas();
    this.Getquestions(this.id_cat);
  }

  ngOnInit() {
  }

  /**
   * Opens a pop.
   */
  openDialog() {
    this.user = this.verifiedUser();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: "Angular For Beginners"
    };

    this.dialog.open(DialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data != undefined) {
        console.log(data, 'data');
        console.log(this.user);
        data.id_user = this.user.id;
        this.inserIdea(data);
      }
      this.dialog.closeAll();
    });
  }

  /**
   * On the pop, there's a form with question for 
   * the user to evaluate their idea.
   * @param id which question id is requested.
   */
  openQuestionDialog(id) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: "Angular For Beginners"
    };

    this.dialog.open(QuestionComponent, dialogConfig);

    const dialogRef = this.dialog.open(QuestionComponent, dialogConfig);

    dialogRef.componentInstance.userID = this.user.id;

    dialogRef.componentInstance.busID = id;

    dialogRef.afterClosed().subscribe(data => {
      // if(data != undefined ){
      //   data.id_user = this.user.id;
      //   this.inserIdea(data);
      // }
      this.dialog.closeAll();
    });
  }

  /**
   * Adds a user's idea.
   * @param idea inserted by the user.
   */
  inserIdea(idea) {
    this.clientService.insertBusinessIdea(idea).subscribe((data: UserResponse) => {
      console.log(data)
        // this.ideas = data.data;
        this.getUserIdeas();
        console.log(data);
      });
  }

  /**
   * Gets all the user's ideas that were added by them.
   */
  getUserIdeas() {
    this.clientService.getIdeas(this.user.id).subscribe(data => {
      this.ideas = data;
      if (data.data.length > 0) {
        this.found = true;
      }
      console.log(data);
    });
  }

  /**
   * Gets questions from the server's endpoint base on the id.
   * @param id_cat which question id is requested.
   */
  Getquestions(id_cat) {
    this.clientService.getQuestions(2).subscribe((data: QuestionsResponse) => {
      this.questions = data.data;
      console.log(data);
    });
  }

  verifiedUser() {
    if(this.auth.loggedIn) {
      this.verified = JSON.parse(sessionStorage.getItem("access_token"));
      if(this.verified.auth) {
        return this.auth.verifyToken(this.verified.token);
      }
    }
  }
}