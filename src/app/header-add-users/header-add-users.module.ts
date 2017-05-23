import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderAddUsersRoutingModule } from './header-add-users-routing.module';
import { HeaderAddUsersComponent } from './header-add-users.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderAddUsersRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [HeaderAddUsersComponent]
})
export class HeaderAddUsersModule { }
