import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlRoutingModule } from './control-routing.module';
import { ControlComponent } from './control.component';

@NgModule({
  imports: [
    CommonModule,
    ControlRoutingModule
  ],
  declarations: [ControlComponent]
})
export class ControlModule { }
