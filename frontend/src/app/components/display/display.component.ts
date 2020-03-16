import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
<<<<<<< HEAD
import { ClientService } from 'src/app/services/client.service';
=======
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogComponent } from '../dialog/dialog.component';
>>>>>>> fd52cb4751a02891a69c1252d4eb0c31fc880ab3

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

<<<<<<< HEAD
  constructor( private clientService:ClientService) {

    this.userData=localStorage.getItem('user');
    this.user = JSON.parse(this.userData);
    this.getUserIdeas();
=======
  constructor(private dialog: MatDialog) {}
>>>>>>> fd52cb4751a02891a69c1252d4eb0c31fc880ab3


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

 
    dialogRef.afterClosed().subscribe(
      data => {

        console.log(data)
            this.dialog.closeAll()
      }
  ); 

}}
