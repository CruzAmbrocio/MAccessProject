import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';


@NgModule({

  imports: [
    CommonModule,
    MainRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    MainComponent

  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
