import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import {ContentResponse, Content } from 'src/app/models/content';

@Component({
  selector: 'app-digital-market',
  templateUrl: './digital-market.component.html',
  styleUrls: ['./digital-market.component.scss']
})
export class DigitalMarketComponent implements OnInit {
  //content: Content[];
  contentShow: any;

  constructor(private clientService:ClientService) {
    this.getContent(4);
   }

  ngOnInit() {
  }

getContent(id_cat) :void {
  //console.log("the dm content works");
  this.clientService.getContent(4).subscribe((data:ContentResponse) =>{
    this.contentShow = data.data;
    console.log(data);
  })
}

}
