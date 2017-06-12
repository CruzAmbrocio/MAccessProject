import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRolCheckRoutingModule } from './edit-rol-check-routing.module';
import { EditRolCheckComponent } from './edit-rol-check.component';

@NgModule({
  imports: [
    CommonModule,
    EditRolCheckRoutingModule
  ],
  declarations: [EditRolCheckComponent]
})
export class EditRolCheckModule { }
