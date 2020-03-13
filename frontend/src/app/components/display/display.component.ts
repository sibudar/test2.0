import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  userData: string;
  user: any ;
  found = false;
  ideas : any ;

  constructor( private clientService:ClientService) {

    this.userData=localStorage.getItem('user');
    this.user = JSON.parse(this.userData);
    this.getUserIdeas();


  }


  ngOnInit() {
  }

  getUserIdeas()
  {
    console.log('found')
    var userData1 = JSON.parse(this.userData);
    this.clientService.getIdeas(this.user.id)
    .subscribe((data)=>{
      console.log(data);
      this.ideas = data;
      this.found = true;
      console.log(data);
    });

 }

 

}
