import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddLocTemplateRoutingModule } from './add-loc-template-routing.module';
import { AddLocTemplateComponent } from './add-loc-template.component';

@NgModule({
  imports: [
    CommonModule,
    AddLocTemplateRoutingModule
  ],
  declarations: [AddLocTemplateComponent]
})
export class AddLocTemplateModule { }
