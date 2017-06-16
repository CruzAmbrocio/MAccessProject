import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessEditRoutingModule } from './access-edit-routing.module';
import { AccessEditComponent } from './access-edit.component';

@NgModule({
  imports: [
    CommonModule,
    AccessEditRoutingModule
  ],
  declarations: [AccessEditComponent]
})
export class AccessEditModule { }
