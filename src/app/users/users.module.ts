import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  NgbdModalContent } from './users.component';


import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule.forRoot(),

  ],
  declarations: [
    UsersComponent,
    NgbdModalContent
  ],
  entryComponents: [NgbdModalContent],
})
export class UsersModule { }
