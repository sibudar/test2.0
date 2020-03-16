import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ClientService } from 'src/app/services/client.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogComponent } from '../dialog/dialog.component';
import { UserResponse } from 'src/app/models/user';

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
  questions: any[];


  constructor( private clientService:ClientService,private dialog: MatDialog) { 

    this.userData=localStorage.getItem('user');
    this.user = JSON.parse(this.userData);
    this.getUserIdeas();
    this.displayQuestions();

  
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
      

        if(data != undefined ){ 
           data.id_user = this.user.id;
            this.inserIdea(data);
        }
        
        this.dialog.closeAll()
      }
  ); 
}


inserIdea(idea)
{
 
  this.clientService.insertBusinessIdea(idea)
  .subscribe((data:UserResponse) =>{
   // this.ideas = data.data;
   this.getUserIdeas()
    console.log(data);

  });

  
}

getUserIdeas()
{
  this.clientService.getIdeas(this.user.id)
  .subscribe((data)=>{
    console.log(data);
    this.ideas = data;
    if(data.data.length > 0){
      this.found = true;
    }
    console.log(data);
  });

}



popup(id){
  Swal.mixin({
    input: 'text',
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    progressSteps: ['1', '2', '3','4','5']
  }).queue([
    {
      title: 'Question 1',
      text: this.questions[0].q_name
    },
    {
      title: 'Question 2',
      text: this.questions[1].q_name
    },
    {
      title: 'Question 3',
      text: this.questions[2].q_name
    },
    {
      title: 'Question 4',
      text: this.questions[3].q_name
    },
    {
      title: 'Question 5',
      text: this.questions[4].q_name
    }
  ]).then((result) => {


    for (let index = 0; index < result.value.length; index++) {
     let sent = {
                    "id_bus": id , 
                    "id_user":  this.user.id ,
                    "user_answer": result.value[index],
                    "id_que": this.questions[index].id
                  }


      this.clientService.postAnswers(sent).subscribe( (res) => {
        console.log(res)
      })
               
    }
  
    if (result.value) {
      const answers = JSON.stringify(result.value)
      Swal.fire({
        title: 'All done!',
        html: `
          Your answers:
          <pre><code>${answers}</code></pre>
        `,
        confirmButtonText: 'Lovely!'
      })
    }
  })
}

displayQuestions()
{
  this.clientService.getQuestions()
 .subscribe((data) =>{
  console.log(data);
   this.questions=data.data;
   
 })
}
}
