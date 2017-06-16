import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoleAccessRoutingModule } from './add-role-access-routing.module';
import { AddRoleAccessComponent } from './add-role-access.component';

@NgModule({
  imports: [
    CommonModule,
    AddRoleAccessRoutingModule
  ],
  declarations: [AddRoleAccessComponent]
})
export class AddRoleAccessModule { }
