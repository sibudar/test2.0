import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-ratings",
  templateUrl: "./ratings.component.html",
  styleUrls: ["./ratings.component.scss"],
})
export class RatingsComponent implements OnInit {
  
  selected = 0;
  hovered = 0;
  readonly = false;
  
  constructor() {}

  ngOnInit() {}
}
