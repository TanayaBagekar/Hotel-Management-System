import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ]
})
export class SignupModule { }
