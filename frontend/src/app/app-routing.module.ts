import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { LoginComponent } from './components/login/login.component';
import { DisplayComponent } from './components/display/display.component';


const routes: Routes = [
  { path: 'client', loadChildren: () => import('./layouts/client/client.module').then(m => m.ClientModule) },
  { path: 'client/login', component: LoginComponent, canActivate: [AuthGuard] },
  // { path: 'client/display', component: DisplayComponent, canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: () => import('./layouts/admin/admin.module').then(m => m.AdminModule) },
  { path: '', redirectTo: '/client', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
