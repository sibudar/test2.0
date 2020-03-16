import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  form: FormGroup;
  description:string;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) data) {

      this.description = data.description;
  }

  ngOnInit() {

    this.dialogRef.updateSize('50%', '50%');
      this.form = this.fb.group({
          description: [this.description, []],

      });
  }

  save() {
      this.dialogRef.close(this.form.value);
  
      
  }

  close() {
    this.dialogRef.close();
}
}
