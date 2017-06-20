import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditUserTemplateRoutingModule } from './edit-user-template-routing.module';
import { EditUserTemplateComponent } from './edit-user-template.component';

@NgModule({
  imports: [
    CommonModule,
    EditUserTemplateRoutingModule
  ],
  declarations: [EditUserTemplateComponent]
})
export class EditUserTemplateModule { }
