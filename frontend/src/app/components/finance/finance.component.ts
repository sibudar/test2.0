import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { QuestionsResponse, Questions } from "src/app/models/questions";
import { ContentResponse, Content } from "src/app/models/content";

@Component({
  selector: "app-finance",
  templateUrl: "./finance.component.html",
  styleUrls: ["./finance.component.scss"]
})
export class FinanceComponent implements OnInit {
  questions: Questions[];
  content: Content[];
  contentShow: Content;
  show: boolean = false;
  index: number = 0;
  button: string = "Yes";
  pageLoaded: boolean = false;
  done: boolean = false;

  constructor(private clientService: ClientService) {
    this.Getquestions(3);
    this.Getcontent(3);
  }

  ngOnInit() {}

  Getquestions(id_cat): void {
    this.clientService.getQuestions(3).subscribe((data: QuestionsResponse) => {
      this.questions = data.data;
      console.log(this.questions.length);
      console.log(data);
    });
  }

  Getcontent(id_cat): void {
    this.clientService.getContent(3).subscribe((data: ContentResponse) => {
      this.content = data.data;
      this.contentShow = this.content[this.index];
      this.pageLoaded = true;
    });
  }

  noClick(): void {
    this.contentShow = this.content[this.index];
    this.show = true;
    this.button = "Next";
    console.log(this.contentShow);
    // #f3f3f3
  }

  yesClick(): void {
    if (this.index++ <= this.questions.length - 1) {
      this.show = false;
      this.button = "Yes";
    } else {
      this.button = "Head to Digital Marketing";
      this.done = true;
    }
  }
}
