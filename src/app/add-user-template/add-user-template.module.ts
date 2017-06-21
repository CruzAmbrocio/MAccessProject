import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserTemplateRoutingModule } from './add-user-template-routing.module';
import { AddUserTemplateComponent } from './add-user-template.component';

@NgModule({
  imports: [
    CommonModule,
    AddUserTemplateRoutingModule
  ],
  declarations: [AddUserTemplateComponent]
})
export class AddUserTemplateModule { }

