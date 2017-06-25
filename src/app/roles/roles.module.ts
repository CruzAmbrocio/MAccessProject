import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';


@NgModule({
  imports: [
    CommonModule,
    RolesRoutingModule,
    FormsModule,
    BrowserModule,
  ],
  declarations: [RolesComponent]
})
export class RolesModule { }
