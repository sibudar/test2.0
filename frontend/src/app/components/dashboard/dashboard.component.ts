import { Component, OnInit } from "@angular/core";
import { JoyrideService } from "ngx-joyride";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {

  constructor(private joyride: JoyrideService) {}

  ngOnInit() {}

  tour() {
    this.joyride.startTour({ 
      steps: ['welcomeStep' ,'ideaStep', 'developerStep', 'digitalMarketingStep']}
    )
  }
}