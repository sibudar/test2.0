import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { QuestionsResponse, Questions } from 'src/app/models/questions';
import { AuthService } from '../../services/auth.service';
import { UserResponse, LoginResponse } from 'src/app/models/user';
import { AnswerResponse } from 'src/app/models/answers';


@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {

  questions: Questions[] ;
  user: LoginResponse;
  ideas: any ; 
  hovered = 0;
  selected: any ; 
  name = "" ;
  answers: any ;
  
  constructor(private clientService: ClientService,private auth: AuthService) {
    


   }

   verifyUser() {
    if(this.auth.loggedIn) {
      let verified = JSON.parse(sessionStorage.getItem("access_token"));
      this.auth.verifyToken(verified.token).subscribe((res: UserResponse) => {
        this.user = res.data;
        this.name = this.user.first_name ; 
        this.clientService.getIdeas(this.user.id).subscribe(res => {
          this.ideas = res.data ;
          this.selected = this.ideas[0].id ;
          this.getAnswer() ;
          console.log(this.ideas)
        }) ;
      });
    }
  }

  getAnswer() {
    this.clientService.getAnswers(this.selected).subscribe((res:AnswerResponse) => {
      this.answers = res.data ; 
    }) ; 
  }

  selectIdea(e) {
    this.selected = e.value ; 
    this.getAnswer() ; 
    console.log(this.selected)
  }

  ngOnInit() {
    this.verifyUser() ;
    this.clientService.getQuestions(1).subscribe((res:QuestionsResponse) => {
      this.questions = res.data ;
    })
  }

}
