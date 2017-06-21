import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditLocTemplateRoutingModule } from './edit-loc-template-routing.module';
import { EditLocTemplateComponent } from './edit-loc-template.component';

@NgModule({
  imports: [
    CommonModule,
    EditLocTemplateRoutingModule
  ],
  declarations: [EditLocTemplateComponent]
})
export class EditLocTemplateModule { }
