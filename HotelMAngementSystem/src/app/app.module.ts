import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from './navbar/navbar.component';
import { OwnerModule } from './owner/owner.module';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { SignupComponent } from './signup/signup.component';
import { UsersModule } from './users/users.module';
import { ApiComponent } from './api/api.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignupModule } from './signup/signup/signup.module';
import { ApiModule } from './api/api/api.module';

@NgModule({
  declarations: [
    AppComponent,
    PagenotFoundComponent,
    SignupComponent,
    NavbarComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    OwnerModule,
    AdminModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule,
    SignupModule,
    ApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
