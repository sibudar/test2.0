import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { JourneyComponent } from '../journey/journey.component';

@Component({
  selector: "app-ratings",
  templateUrl: "./ratings.component.html",
  styleUrls: ["./ratings.component.scss"],
})
export class RatingsComponent implements OnInit {
  selected: number = 0;
  hovered = 0;
  readonly = false;
  id_business: any;
  descript: any;
  user_id: any;

  constructor(private clientService: ClientService, private ratings: JourneyComponent) {
    console.log(this.selected);
  }

  ngOnInit() {}

  /**
   * Updates the rating of a business idea.
   * @param rate
   */
  updateRate() {
    let data = {
      rate: this.selected,
      busin_id: 6,
      id_user: this.ratings.user.data.id,
    };
    this.clientService.updateRatings(data).subscribe((results) => {
      console.log(results);
    });
  }
}
