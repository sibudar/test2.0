import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'client', loadChildren: () => import('./layouts/client/client.module').then(m => m.ClientModule) },
 { path: 'admin', loadChildren: () => import('./layouts/admin/admin.module').then(m => m.AdminModule) },
 { path: '', redirectTo: '/client', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
