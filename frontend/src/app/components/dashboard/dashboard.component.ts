import { Component, OnInit, AfterViewInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InstructionsComponent } from '../instructions/instructions.component';
import { MatDialog } from '@angular/material/dialog';
import Shepherd from "shepherd.js";

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
  private tour: any;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {}
  
  ngAfterViewInit(): void {
    this.tour = new Shepherd.Tour({
      defaultStepOptions: {
        classes: "shadow-md bg-purple-dark",
        scrollTo: true,
      },
    });
    this.tour.addStep("example", {
      title: "Example Shepherd",
      text: "Creating a Shepherd is easy too! Just create ...",
      attachTo: ".hero-example bottom",
      advanceOn: ".docs-link click",
    });
    this.tour.start();

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