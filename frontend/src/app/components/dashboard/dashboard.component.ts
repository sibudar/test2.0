import { Component, OnInit } from "@angular/core";
import { JoyrideService } from "ngx-joyride";
import { ClientComponent } from 'src/app/layouts/client/client.component';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {

  key: any;
  checkLength: Object;

  constructor(private joyride: JoyrideService, private bridge: ClientComponent, private clientService: ClientService) {
    this.clientService.getKey(this.bridge.user.id).subscribe((data) => {
      this.checkLength = data;
      console.log(this.checkLength);
      // this.key = this.checkLength.data.givenKeys;
    });
  }

  ngOnInit() {
    
  }

  triggerKeys() {
    console.log(this.key, "dashboard key");
    if(this.key == 1) {
      this.firstTour();
    }
    if(this.key == 2) {
      this.secondTour();
    }
    if(this.key == 3) {
      this.thirdTour()
    }
  }

  firstTour() {
    this.joyride.startTour({
      steps: ["ideaStep"],
    });
  }

  secondTour() {
    this.joyride.startTour({
      steps: ["developerStep"],
    });
  }

  thirdTour() {
    this.joyride.startTour({
      steps: ["digitalMarketingStep"],
    });
  }

  firstStyles(): Object {
    if(this.key > 0) {
      return { opacity: "5" };
    }
    return { opacity: "0.1", cursor: "not-allowed" };
  }

  secondStyles(): Object {
    if(this.key > 1) {
      return { opacity: "5" };
    }
    return { opacity: "0.0", cursor: "not-allowed", "pointer-events": "none" };
  }

  thirdStyles(): Object {
    if (this.key > 2) {
      return { opacity: "5" };
    }
    return { opacity: "0.0", cursor: "not-allowed", "pointer-events": "none" };
  }

  getKey(id) {
    this.clientService.getKey(id).subscribe((data) => {
      this.checkLength = data;
      console.log(this.checkLength);
      // this.key = this.checkLength.data.givenKeys;
    });
  }
}