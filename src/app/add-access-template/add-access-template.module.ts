import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAccessTemplateRoutingModule } from './add-access-template-routing.module';
import { AddAccessTemplateComponent } from './add-access-template.component';

@NgModule({
  imports: [
    CommonModule,
    AddAccessTemplateRoutingModule
  ],
  declarations: [AddAccessTemplateComponent]
})
export class AddAccessTemplateModule { }
