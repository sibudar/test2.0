import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service';
import { QuestionsResponse } from 'src/app/models/questions';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: "app-journey",
  templateUrl: "./journey.component.html",
  styleUrls: ["./journey.component.scss"],
})
export class JourneyComponent implements OnInit {
  ideas: any;
  user: any;
  found: boolean;
  questions: any;
  verified: any;
  id_cat: 1;
  evaluation: boolean;

  constructor(
    private clientService: ClientService, private auth: AuthService) {
      this.verifiedUser();
      this.change();
    }

  ngOnInit() {}

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
    this.clientService.getQuestions(1).subscribe((data: QuestionsResponse) => {
      this.questions = data.data;
      console.log(data);
    });
  }

  /**
   * Verifies a token.
   */
  verifiedUser() {
    if (this.auth.loggedIn) {
      // checks if you've logged in
      this.verified = JSON.parse(sessionStorage.getItem("access_token"));
      if (this.verified.auth) {
        // checks if the auth is "true" on the token
        this.auth.verifyToken(this.verified.token).subscribe((data) => {
          // go the service for decryp
          this.user = data; // assign what you got to this.user: user's details
          console.log(this.user);
          this.getUserIdeas();
          this.getQuestions(this.id_cat);
        });
      }
    }
  }
  
  change() {
    this.evaluation = true;
  }
}
