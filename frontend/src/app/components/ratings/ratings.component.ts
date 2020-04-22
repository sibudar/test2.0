import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { JourneyComponent } from '../journey/journey.component';

@Component({
  selector: "app-ratings",
  templateUrl: "./ratings.component.html",
  styleUrls: ["./ratings.component.scss"],
})
export class RatingsComponent implements OnInit {
  selected: any;
  hovered = 0;
  readonly = false;
  id_business: any;
  descript: any;
  user_id: any;
  hide: boolean;

  constructor(private clientService: ClientService, private ratings: JourneyComponent) {
  }

  ngOnInit() {}

  /**
   * Updates the rating of a business idea.
   * @param rate
   */
  updateRate() {
    console.log(this.selected);
    let data = {
      rate: this.selected,
      busin_id: this.ratings.ideas.data[0].id,
      id_user: this.ratings.user.data.id,
    };
    this.clientService.updateRatings(data).subscribe((results) => {
      this.hide = true;
    });
  }
}
