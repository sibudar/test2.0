import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InstructionsComponent } from '../instructions/instructions.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(InstructionsComponent, {
      width: "250px"
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
  }
}