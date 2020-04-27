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
 
  document: any;
  financeContent: any;

  constructor(private clientService: ClientService, private joyride: JoyrideService) {
    this.getDocuments(5);
    this.getContent(3);
  }

  ngOnInit() {}


  /**
   * Gets content from the server's endpoint base on the id.
   * @param id_cat which content id is requested.
   */
  getContent(id_cat): void {
    this.clientService.getContent(id_cat).subscribe((data: ContentResponse) => {
      this.financeContent = data.data;
    });
  }


    /**
   * Gets content from the server's endpoint base on the id.
   * @param id_cat which content id is requested.
   */
  getDocuments(id_cat): void {
    this.clientService.getContent(id_cat).subscribe((data: ContentResponse) => {
      this.document = data.data;
    });
  }
}