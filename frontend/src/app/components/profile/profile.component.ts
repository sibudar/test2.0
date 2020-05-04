import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ClientService } from "src/app/services/client.service";
import { ToasterService } from "src/app/services/toaster.service";
import { DeveloperProfile } from "src/app/models/developers";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  devProfile: DeveloperProfile[] = [];

  form: FormGroup;

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private toastr: ToasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.devProfile.push(
      {
        name: "Kagiso Marabe",
        title: "Software Developer",
        company: "Digital Academy",
        yearsOfExperience: 2,
        description: "developing restful apis",
        skills: "html, css, angular,php, java, nodejs,Sql,mysql workbench",
        school: "University Of Pretoria",
        degree: "Information Technology",
        fieldofstudy: "ICT",
        twitter: "link",
        facebook: "link",
      },
      {
        name: "Jaden Boikhutso",
        title: "Frontend developer",
        company: "Asolutions",
        yearsOfExperience: 4,
        description: "designing responsive webistes asn applications",
        skills: "html, css, angular,php, java, nodejs,Sql,mysql workbench",
        school: "University Of South Africa",
        degree: "Information Technology",
        fieldofstudy: "ICT",
        twitter: "link",
        facebook: "link",
      },
      {
        name: "Lesego Ntolo",
        title: "Full-stack developer",
        company: "ABSA",
        yearsOfExperience: 3,
        description:
          "Specialising with developing online shopping(e-commerce) webpages",
        skills: "html, css,react,php, java, nodejs,mongo",
        school: "WITS",
        degree: "Information Technology",
        fieldofstudy: "ICT",
        twitter: "link",
        facebook: "link",
      },
      {
        name: "Given Smith",
        title: "Backend developer",
        company: "Digital Academy",
        yearsOfExperience: 5,
        description: "developing restful apis",
        skills:
          "html, css, angular,php, java,end-to-end testing, nodejs,Sql,mysql workbench",
        school: "Tshwane University Of Technology",
        degree: "Information Technology",
        fieldofstudy: "ICT",
        twitter: "link",
        facebook: "link",
      }
    );

    console.log(this.devProfile[0].name);
    //domain form
    this.form = this.formBuilder.group({
      domain: new FormControl("", [Validators.required]),
    });
  }

  postDomain(): void {
    this.clientService.postDomain(this.form.value).subscribe((res) => {
      this.toastr.success(res.data.domain_Availability, res.data.domain, 6000);
      console.log(res);
    });
  }

  cardClick(dev): void {
    this.router.navigateByUrl("/developers", { state: dev });
  }
}
