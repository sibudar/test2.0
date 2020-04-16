import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogComponent } from '../dialog/dialog.component';
import { QuestionComponent } from '../question/question.component';
import { UserResponse } from 'src/app/models/user';
import { QuestionsResponse } from 'src/app/models/questions';
import { JoyrideService } from 'ngx-joyride';

@Component({
  selector: "app-ideas",
  templateUrl: "./ideas.component.html",
  styleUrls: ["./ideas.component.scss"],
  providers: [NgbRatingConfig],
})
export class IdeasComponent implements OnInit {
  currentRate: number;
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
  token: any;

  constructor(
    private config: NgbRatingConfig,
    private clientService: ClientService,
    private auth: AuthService,
    private dialog: MatDialog,
    private joyride: JoyrideService
  ) {
    this.verifiedUser();
    config.max = 5;
  }

  ngOnInit() {}

  /**
   * Opens a pop.
   */
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(DialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data != undefined) {
        data.id_user = this.user.data.id;
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
      title: "Angular For Beginners",
    };

    this.dialog.open(QuestionComponent, dialogConfig);

    const dialogRef = this.dialog.open(QuestionComponent, dialogConfig);

    dialogRef.componentInstance.userID = this.user.data.id;

    dialogRef.componentInstance.busID = id;

    dialogRef.afterClosed().subscribe((data) => {
      this.dialog.closeAll();
    });
  }

  /**
   * Adds a user's idea.
   * @param idea inserted by the user.
   */
  inserIdea(idea) {
    this.clientService
      .insertBusinessIdea(idea)
      .subscribe((data: UserResponse) => {
        console.log(data);
        // this.ideas = data.data;
        this.getUserIdeas();
        console.log(data);
      });
  }

  /**
   * Gets all the user's ideas that were added by them.
   */
  getUserIdeas() {
    this.clientService.getIdeas(this.user.data.id).subscribe((data) => {
      this.ideas = data;
      if (data.data.length > 0) {
        this.found = true;
      }
    });
  }

  /**
   * Gets questions from the server's endpoint base on the id.
   * @param id_cat which question id is requested.
   */
  getQuestions(id_cat) {
    this.clientService.getQuestions(2).subscribe((data: QuestionsResponse) => {
      this.questions = data.data;
      console.log(data);
    });
  }

  /**
   * Verifies a token.
   */
  verifiedUser() {
    if (this.auth.loggedIn) {
      this.verified = JSON.parse(sessionStorage.getItem("access_token"));
      if (this.verified.auth) {
        this.auth.verifyToken(this.verified.token).subscribe((data) => {
          this.user = data;
          this.getUserIdeas();
          this.getQuestions(this.id_cat);
        });
      }
    }
  }

  tour() {
    this.joyride.startTour({
      steps: ["ideaStep", "rateStep", "addIdeaStep"],
    });
  }
}
