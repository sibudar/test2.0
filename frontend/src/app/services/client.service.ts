import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url : string = 'http://localhost:5000/api/v1';
  constructor(private http : HttpClient) { }


  public register(user:any) : Observable<any>
  {
    return this.http.post(this.url + '/users', user);
    
  }

  public login(user: any): Observable<any>
  {
    return this.http.post(this.url + '/users/login', user)
  }

  public forgotPassword(user: any): Observable<any>
  {
    return this.http.post(this.url + '/users/forgotPassword', user)
  }

  public resetPassword(user: any): Observable<any>
  {
    return this.http.post(this.url + '/users/resetPassword', user)
  }

  //enter business idea
  public insertBusinessIdea(data)
   {
     return this.http.post(this.url + '/ideas' ,data);
   }
  

   //get business ideas and receives id

   public getIdeas(user_id): Observable<any> 
   {
     return this.http.get(this.url + '/ideas/' + user_id)
   }

   public myIdeas(id){
    return this.http.get(this.url+ '/ideas/' + id)
   }
   //get questions
   public getQuestions()
    {
      //link from countries rest api
      return this.http.get(this.url + '/questions');
    }

    public postAnswers(data)
    {
      return this.http.post(this.url + '/questions/answers' ,data)
    }
   
}


  //get business ideas and receives id

  