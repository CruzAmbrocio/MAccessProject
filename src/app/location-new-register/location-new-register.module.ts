import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationNewRegisterRoutingModule } from './location-new-register-routing.module';
import { LocationNewRegisterComponent } from './location-new-register.component';

@NgModule({
  imports: [
    CommonModule,
    LocationNewRegisterRoutingModule
  ],
  declarations: [LocationNewRegisterComponent]
})
export class LocationNewRegisterModule { }
