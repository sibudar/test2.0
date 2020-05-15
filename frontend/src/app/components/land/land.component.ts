import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { QuestionsResponse, Questions } from 'src/app/models/questions';
import { AuthService } from '../../services/auth.service';
import { UserResponse, LoginResponse } from 'src/app/models/user';

interface Food {
  value: string;
  viewValue: string;
}

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
  constructor(private clientService: ClientService,private auth: AuthService) {
    


   }

   verifyUser() {
    if(this.auth.loggedIn) {
      let verified = JSON.parse(sessionStorage.getItem("access_token"));
      this.auth.verifyToken(verified.token).subscribe((res: UserResponse) => {
        this.user = res.data;
      
        this.clientService.getIdeas(this.user.id).subscribe(res => {
          this.ideas = res.data ;
          this.selected = this.ideas[0].id ;
          console.log(this.ideas)
        }) ;
      });
    }
  }

  // getAnswer() {
  //   this.clientService.get
  // }

  selectIdea(e) {
    this.selected = e.value ; 
    console.log(this.selected)
  }

  ngOnInit() {
    this.verifyUser() ;
    this.clientService.getQuestions(1).subscribe((res:QuestionsResponse) => {
      this.questions = res.data ;
    })
  }

}
