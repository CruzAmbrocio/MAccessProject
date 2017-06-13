import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRegisterRoutingModule } from './location-register-routing.module';
import { LocationRegisterComponent } from './location-register.component';

@NgModule({
  imports: [
    CommonModule,
    LocationRegisterRoutingModule
  ],
  declarations: [LocationRegisterComponent]
})
export class LocationRegisterModule { }
