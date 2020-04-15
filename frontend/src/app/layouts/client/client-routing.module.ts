import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from 'src/app/components/register/register.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { DisplayComponent } from 'src/app/components/display/display.component';
import { LandingComponent } from 'src/app/components/landing/landing.component';
import { ForgotPasswordComponent } from 'src/app/components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from 'src/app/components/reset-password/reset-password.component';

import { QuestionComponent } from 'src/app/components/question/question.component';
import { DigitalMarketComponent } from 'src/app/components/digital-market/digital-market.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { DashboardComponent } from "src/app/components/dashboard/dashboard.component";
import { ClientComponent } from './client.component';
import { DevelopersComponent } from 'src/app/components/developers/developers.component';

import { EvaluationComponent } from 'src/app/components/evaluation/evaluation.component';


const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: '', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'display', component: DisplayComponent },
  { path: 'home', component: LandingComponent},
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'resetPassword/:token', component: ResetPasswordComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'profile', component: ProfileComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "developers", component: DevelopersComponent },
  { path: 'ideas', component: EvaluationComponent }//to be removed,for testing purpose
  

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientRoutingModule { }