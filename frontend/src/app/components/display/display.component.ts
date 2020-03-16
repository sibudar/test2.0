import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private dialog: MatDialog) {}


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

}}
