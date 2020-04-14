import { Component, OnInit, AfterViewInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InstructionsComponent } from '../instructions/instructions.component';
import { MatDialog } from '@angular/material/dialog';
import { ShepherdService } from "angular-shepherd";
// import { steps as defaultSteps, defaultStepOptions } from "../data";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {}
  
  ngAfterViewInit(): void {
    // this.shepherdService.defaultStepOptions = defaultStepOptions;
    // this.shepherdService.modal = true;
    // this.shepherdService.confirmCancel = false;
    // this.shepherdService.addSteps(defaultSteps);
    // this.shepherdService.start();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InstructionsComponent, {
      width: "650px",
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