import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';


import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { RegisterComponent } from '../../components/register/register.component';
import { LoginComponent } from '../../components/login/login.component';
import { DisplayComponent } from '../../components/display/display.component';
import { LandingComponent } from '../../components/landing/landing.component';
import { ResetPasswordComponent } from '../../components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { MatDialogModule } from "@angular/material";
import { QuestionComponent } from '../../components/question/question.component';
import { LegalComponent } from '../../components/legal/legal.component';
import { FinanceComponent } from '../../components/finance/finance.component';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  declarations: [
    ClientComponent,
    RegisterComponent,
    LoginComponent,
    DisplayComponent,
    LandingComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    DialogComponent,
    QuestionComponent,
    LegalComponent,
    FinanceComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatButtonModule,
    MatSliderModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatTabsModule,
    JwtModule.forRoot({
      config: {
        whitelistedDomains: ["localhost:5000"],
        blacklistedRoutes: ["localhost:5000//api/v1/users/login"]
      }
    })
  ],
  providers: [AuthService, AuthGuard],
  entryComponents: [DialogComponent, QuestionComponent]
})
export class ClientModule {}