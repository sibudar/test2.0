import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  ideas : string;
  user_id : any;
  userData:string;
  user:string;
  constructor(private clientService:ClientService ) { 
    this.userData=localStorage.getItem('id');
    this.user = JSON.parse(this.userData);
    this.getIdea(this.user_id);
  }

  ngOnInit() {
  }

  getIdea(user_id)
  {
    this.clientService.getIdeas(user_id).subscribe(data=>{
      this.ideas = data
      console.log(data);
    })
  }

}
