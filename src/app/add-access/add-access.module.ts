import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAccessRoutingModule } from './add-access-routing.module';
import { AddAccessComponent } from './add-access.component';

@NgModule({
  imports: [
    CommonModule,
    AddAccessRoutingModule
  ],
  declarations: [AddAccessComponent]
})
export class AddAccessModule { }
