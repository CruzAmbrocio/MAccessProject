import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditAccessTemplateRoutingModule } from './edit-access-template-routing.module';
import { EditAccessTemplateComponent } from './edit-access-template.component';

@NgModule({
  imports: [
    CommonModule,
    EditAccessTemplateRoutingModule
  ],
  declarations: [EditAccessTemplateComponent]
})
export class EditAccessTemplateModule { }
