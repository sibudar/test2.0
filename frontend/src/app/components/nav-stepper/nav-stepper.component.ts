import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: "app-nav-stepper",
  templateUrl: "./nav-stepper.component.html",
  styleUrls: ["./nav-stepper.component.scss"],
})
export class NavStepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  selectedIndex = 3;
  

  constructor(private _formBuilder: FormBuilder) {}

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
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ["", Validators.required],
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ["", Validators.required],
    });
    // this.selectionChange(this.step);
  }

  selectionChange($event?: StepperSelectionEvent): void {
    console.log('stepper.selectedIndex: ' + this.selectedIndex 
        + '; $event.selectedIndex: ' + $event.selectedIndex);
    $event.selectedIndex = this.selectedIndex;
    console.log($event.selectedIndex, 'changed');
  }
}
