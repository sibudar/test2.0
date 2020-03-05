import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { questions } from ''

@Injectable({
  providedIn: 'root'
})
export class InformationServiceService {

  info_url : string ;
  constructor(private http : HttpClient) { 
   
    this.info_url = environment.api;
  }
  //enter business idea
  public insertBusinessIdea(data)
   {
     return this.http.post(this.info_url + '/ideas' ,data);
   }
   //display business idea,description and receives an id
   public getIdeas(data)
   {
     return this.http.get(this.info_url + '/ideas' + data);
   }
   //get questions
   public getQuestions()
    {
      //link from countries rest api
      return this.http.get(this.info_url + '/questions');
    }

   
}

