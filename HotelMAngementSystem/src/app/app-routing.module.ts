import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';

import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{ path: 'admin/login', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
{ path: 'Owner/login', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) },
{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
 { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
 {path:'api',component:ApiComponent },
 {path:'signup',component:SignupComponent},
 {path:'**',component:PagenotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
