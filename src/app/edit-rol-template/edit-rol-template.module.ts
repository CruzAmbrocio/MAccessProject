import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRolTemplateRoutingModule } from './edit-rol-template-routing.module';
import { EditRolTemplateComponent } from './edit-rol-template.component';

@NgModule({
  imports: [
    CommonModule,
    EditRolTemplateRoutingModule
  ],
  declarations: [EditRolTemplateComponent]
})
export class EditRolTemplateModule { }
