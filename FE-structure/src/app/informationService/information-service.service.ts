import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationServiceService {

  private info_url : string = "/assets/data/question_mock.json";

  constructor(private http : HttpClient) { }
  
    getQuestions()
    {
      return this.http.get(this.info_url)
    }
}

