import { Component, OnInit } from '@angular/core';
import { DeveloperProfile } from 'src/app/models/developers'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  devProfile : DeveloperProfile[] =[];
  ngOnInit(): void {
    this.devProfile.push({ name:'Kagiso Marabe', title:'Software Developer',company: 'Digital Academy' , yearsOfExperience:2 ,description: 'developing restful apis' , skills: 'html, css, angular,php, java, nodejs,Sql,mysql workbench' , school:'University Of Pretoria' , degree: 'Information Technology' , fieldofstudy: 'ICT' ,twitter:'link' ,facebook: 'link' },
{ name:'Jaden Boikhutso',title:'Frontend developer',company: 'Asolutions' , yearsOfExperience:4 ,description: 'designing responsive webistes asn applications' , skills: 'html, css, angular,php, java, nodejs,Sql,mysql workbench' , school:'University Of South Africa' , degree: 'Information Technology' , fieldofstudy: 'ICT' ,twitter:'link' ,facebook: 'link' },
{name:'Lesego Ntolo', title:'Full-stack developer',company: 'ABSA' , yearsOfExperience:3 ,description: 'Specialising with developing online shopping(e-commerce) webpages' , skills: 'html, css,react,php, java, nodejs,mongo' , school:'WITS' , degree: 'Information Technology' , fieldofstudy: 'ICT' ,twitter:'link' ,facebook: 'link' }, 
{name:'Given Smith', title:'Backend developer',company: 'Digital Academy' , yearsOfExperience:5 ,description: 'developing restful apis' , skills: 'html, css, angular,php, java,end-to-end testing, nodejs,Sql,mysql workbench' , school:'Tshwane University Of Technology' , degree: 'Information Technology' , fieldofstudy: 'ICT' ,twitter:'link' ,facebook: 'link' }

    );

    console.log(this.devProfile[0].name)
  }

 

 
  
  constructor() { }

 

}
