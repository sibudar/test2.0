import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ClientService } from 'src/app/services/client.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogComponent } from '../dialog/dialog.component';
import { UserResponse } from 'src/app/models/user';
import { QuestionComponent } from '../question/question.component';


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
  businessIdea : string;
  description : string;
  
  constructor( private clientService:ClientService,private dialog: MatDialog ) { 
    this.userData=localStorage.getItem('user');
    this.user = JSON.parse(this.userData);
    this.getUserIdeas();
    //this.displayQuestions();
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
        if(data != undefined ) { 
          data.id_user = this.user.id;
          this.inserIdea(data);
        }
        this.dialog.closeAll()
      });
    }
    
    openQuestionDialog(id,value) {

     

      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners',
        value:value
      };

      this.dialog.open(QuestionComponent, dialogConfig);
  
      const dialogRef = this.dialog.open(QuestionComponent, dialogConfig);

      dialogRef.componentInstance.userID = this.user.id ; 
      dialogRef.componentInstance.busID =id ;

      dialogRef.afterClosed().subscribe(data => {
      // if(data != undefined ){ 
      //    data.id_user = this.user.id;
      //     this.inserIdea(data);
      // }
      this.dialog.closeAll()
    }); 
  }
  
  inserIdea(idea) {
    this.clientService.insertBusinessIdea(idea).subscribe((data:UserResponse) =>{
   // this.ideas = data.data;
    this.getUserIdeas()
    console.log(data);
  });
}

getUserIdeas() {
  this.clientService.getIdeas(this.user.id).subscribe((data)=> {
    console.log(data);
    this.ideas = data;
    if(data.data.length > 0) {
      this.found = true;
    }
    console.log(data);
  });
}
}
