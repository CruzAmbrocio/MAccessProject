import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserTemplateRoutingModule } from './add-user-template-routing.module';
import { AddUserTemplateComponent } from './add-user-template.component';

import { AdditionCalculateWindow } from '../add-user-template/add-user-template.component';
@NgModule({
  imports: [
    CommonModule,
    AddUserTemplateRoutingModule
  ],
  declarations: [AddUserTemplateComponent],
  entryComponents: [ AdditionCalculateWindow ]
})
export class AddUserTemplateModule { }
