import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UbicationChangeRoutingModule } from './ubication-change-routing.module';
import { UbicationChangeComponent } from './ubication-change.component';

@NgModule({
  imports: [
    CommonModule,
    UbicationChangeRoutingModule
  ],
  declarations: [UbicationChangeComponent]
})
export class UbicationChangeModule { }
