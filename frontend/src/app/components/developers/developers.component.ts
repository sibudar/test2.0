import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ClientService } from 'src/app/services/client.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

  form: FormGroup;

  constructor(private clientService: ClientService, private formBuilder: FormBuilder, private toastr: ToasterService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      domain: new FormControl("", [Validators.required])
    });
  }

  postDomain(): void {
    this.clientService.postDomain(this.form.value).subscribe((res) => {
      this.toastr.success(res.data.domain_Availability, res.data.domain, 6000);
      console.log(res);
    });
  }

}
