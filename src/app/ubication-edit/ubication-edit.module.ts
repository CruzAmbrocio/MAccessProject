import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UbicationEditRoutingModule } from './ubication-edit-routing.module';
import { UbicationEditComponent } from './ubication-edit.component';

@NgModule({
  imports: [
    CommonModule,
    UbicationEditRoutingModule
  ],
  declarations: [UbicationEditComponent]
})
export class UbicationEditModule { }
