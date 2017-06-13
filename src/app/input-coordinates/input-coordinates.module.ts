import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputCoordinatesRoutingModule } from './input-coordinates-routing.module';
import { InputCoordinatesComponent } from './input-coordinates.component';

@NgModule({
  imports: [
    CommonModule,
    InputCoordinatesRoutingModule
  ],
  declarations: [InputCoordinatesComponent]
})
export class InputCoordinatesModule { }
