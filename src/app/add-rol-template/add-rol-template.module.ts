import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRolTemplateRoutingModule } from './add-rol-template-routing.module';
import { AddRolTemplateComponent } from './add-rol-template.component';

@NgModule({
  imports: [
    CommonModule,
    AddRolTemplateRoutingModule
  ],
  declarations: [AddRolTemplateComponent]
})
export class AddRolTemplateModule { }
