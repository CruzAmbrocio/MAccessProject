import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatedLocationRoutingModule } from './created-location-routing.module';
import { CreatedLocationComponent } from './created-location.component';

@NgModule({
  imports: [
    CommonModule,
    CreatedLocationRoutingModule
  ],
  declarations: [CreatedLocationComponent]
})
export class CreatedLocationModule { }
