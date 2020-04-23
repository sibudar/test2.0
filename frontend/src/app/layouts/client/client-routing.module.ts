import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from 'src/app/components/register/register.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { DisplayComponent } from 'src/app/components/display/display.component';
import { LandingComponent } from 'src/app/components/landing/landing.component';
import { ForgotPasswordComponent } from 'src/app/components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from 'src/app/components/reset-password/reset-password.component';

import { QuestionComponent } from 'src/app/components/question/question.component';

import { DMredesignComponent } from 'src/app/components/dmredesign/dmredesign.component';

import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { DashboardComponent } from "src/app/components/dashboard/dashboard.component";
import { IdeasComponent } from "src/app/components/ideas/ideas.component";
import { DigitalMarketComponent } from 'src/app/components/digital-market/digital-market.component';
import { DevelopersComponent } from 'src/app/components/developers/developers.component';
import { LegalComponent } from 'src/app/components/legal/legal.component';
import { FinanceComponent } from 'src/app/components/finance/finance.component';
import { ClientComponent } from './client.component';

const routes: Routes = [
  { path: "", component: ClientComponent , children: [
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "display", component: DisplayComponent },
    { path: "home", component: LandingComponent },
    { path: "forgotPassword", component: ForgotPasswordComponent },
    { path: "resetPassword/:token", component: ResetPasswordComponent },
    { path: "question", component: QuestionComponent },
    { path: "digitalm", component: DMredesignComponent},
    { path: 'profile', component: ProfileComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "digital", component: DigitalMarketComponent },
    { path: "developers", component: DevelopersComponent },
    { path: "ideas", component: IdeasComponent },
    { path: "legal", component: LegalComponent },
    { path: "finance", component: FinanceComponent }
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientRoutingModule { }