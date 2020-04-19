import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from 'src/app/components/register/register.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { DisplayComponent } from 'src/app/components/display/display.component';
import { LandingComponent } from 'src/app/components/landing/landing.component';
import { ForgotPasswordComponent } from 'src/app/components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from 'src/app/components/reset-password/reset-password.component';

import { QuestionComponent } from 'src/app/components/question/question.component';
import { DashboardComponent } from "src/app/components/dashboard/dashboard.component";
import { IdeasComponent } from 'src/app/components/ideas/ideas.component';
import { DigitalMarketComponent } from 'src/app/components/digital-market/digital-market.component';


const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "", component: LandingComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "display", component: DisplayComponent },
  { path: "home", component: LandingComponent },
  { path: "forgotPassword", component: ForgotPasswordComponent },
  { path: "resetPassword/:token", component: ResetPasswordComponent },
  { path: "question", component: QuestionComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "ideas", component: IdeasComponent },
  { path: "digital", component: DigitalMarketComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientRoutingModule { }