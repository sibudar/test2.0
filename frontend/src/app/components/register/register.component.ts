import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  register(user)
  {
    this.clientService.register(user).
    subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
