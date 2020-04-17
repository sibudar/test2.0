import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { QuestionsResponse, Questions } from "src/app/models/questions";
import { ContentResponse, Content } from "src/app/models/content";
import { JoyrideService } from "ngx-joyride";

@Component({
  selector: "app-finance",
  templateUrl: "./finance.component.html",
  styleUrls: ["./finance.component.scss"],
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

  constructor(private clientService: ClientService, private joyride: JoyrideService) {
    this.getQuestions(3);
    this.getContent(3);
  }

  ngOnInit() {}

  /**
   * Gets questions from the server's endpoint base on the id.
   * @param id_cat which question id is requested.
   */
  getQuestions(id_cat): void {
    this.clientService.getQuestions(id_cat).subscribe((data: QuestionsResponse) => {
      this.questions = data.data;
      console.log(this.questions.length);
      console.log(data);
    });
  }

  /**
   * Gets content from the server's endpoint base on the id.
   * @param id_cat which content id is requested.
   */
  getContent(id_cat): void {
    this.clientService.getContent(id_cat).subscribe((data: ContentResponse) => {
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

   /**
   * Executes joyride pop-ups to explain
   * the journey of the entreneur.
   */
  tour() {
    this.joyride.startTour({
      steps: ["financeStep"],
    });
  }
}