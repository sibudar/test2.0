import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ClientService } from 'src/app/services/client.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogComponent } from '../dialog/dialog.component';

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

  constructor( private clientService:ClientService,private dialog: MatDialog) { 

    this.userData=localStorage.getItem('user');
    this.user = JSON.parse(this.userData);
    this.getUserIdeas();
  
    }

  ngOnInit() {
  }


  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
        
    };

    this.dialog.open(DialogComponent, dialogConfig);
    
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);



 
    dialogRef.afterClosed().subscribe(
      data => {

        console.log(data)
            this.dialog.closeAll()
      }
  ); 

  

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
