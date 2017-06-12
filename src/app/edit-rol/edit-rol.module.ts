import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRolRoutingModule } from './edit-rol-routing.module';
import { EditRolComponent } from './edit-rol.component';

@NgModule({
  imports: [
    CommonModule,
    EditRolRoutingModule
  ],
  declarations: [EditRolComponent]
})
export class EditRolModule { }
