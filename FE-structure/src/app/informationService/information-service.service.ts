import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { questions } from ''

@Injectable({
  providedIn: 'root'
})
export class InformationServiceService {

  //private info_url : string = "/assets/data/question_mock.json";
 
  constructor(private http : HttpClient) { 
    this.getQuestions() 
  }
  
    getQuestions()
    {
      //link from countries rest api
      return this.http.get('https://restcountries.eu/rest/v2/all');
    }
}

