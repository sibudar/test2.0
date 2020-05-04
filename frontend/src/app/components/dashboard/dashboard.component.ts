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
  checkLength: any;

  constructor(private joyride: JoyrideService, private bridge: ClientComponent, private clientService: ClientService) {
    this.getKey(this.bridge.user.id);
  }

  ngOnInit() {
  }

  /**
   * Which tour can be triggered.
   */
  triggerKeys(key) {
    console.log(this.key, "dashboard key");
    if(key == 1) {
      this.firstTour();
    }
    if(key == 2) {
      this.secondTour();
    }
    if(key == 3) {
      this.thirdTour()
    }
  }

  /**
   * Tour, helps the user understand.
   */
  firstTour() {
    this.joyride.startTour({
      steps: ["ideaStep"],
    });
  }

  /**
   * Tour, helps the user understand.
   */
  secondTour() {
    this.joyride.startTour({
      steps: ["developerStep"],
    });
  }

  /**
   * Tour, helps the user understand.
   */
  thirdTour() {
    this.joyride.startTour({
      steps: ["digitalMarketingStep"],
    });
  }

  /**
   * Styling for a card: ngStyle
   * @returns an object that contains styles.
   */
  firstStyles(): Object {
    if(this.key > 0) {
      return { opacity: "5" };
    }
    return { opacity: "0.1", cursor: "not-allowed" };
  }

  /**
   * Styling for a card: ngStyle
   * @returns an object that contains styles.
   */
  secondStyles(): Object {
    if(this.key > 1) {
      return { opacity: "5" };
    }
    return { opacity: "0.0", cursor: "not-allowed", "pointer-events": "none" };
  }

  /**
   * Styling for a card: ngStyle
   * @returns an object that contains styles.
   */
  thirdStyles(): Object {
    if(this.key > 2) {
      return { opacity: "5" };
    }
    return { opacity: "0.0", cursor: "not-allowed", "pointer-events": "none" };
  }

  /**
   * Gets the key the user have on the database.
   * @param id user's id.
   */
  getKey(id) {
    this.clientService.getKey(id).subscribe((data) => {
      this.checkLength = data;
      this.key = this.checkLength.data[0].givenKeys;
      this.triggerKeys(this.key);
    });
  }
}