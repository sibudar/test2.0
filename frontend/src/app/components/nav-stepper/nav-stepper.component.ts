import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
    this.fifthFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
  }
}
