import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ClientService } from "src/app/services/client.service";
import { ToasterService } from "src/app/services/toaster.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-developers",
  templateUrl: "./developers.component.html",
  styleUrls: ["./developers.component.scss"],
})
export class DevelopersComponent implements OnInit {
  form: FormGroup;
  profile: any;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToasterService
  ) {
    console.log(this.router.getCurrentNavigation().extras.state);
    this.profile = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {}
}
