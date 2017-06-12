import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesViewRoutingModule } from './roles-view-routing.module';
import { RolesViewComponent } from './roles-view.component';

@NgModule({
  imports: [
    CommonModule,
    RolesViewRoutingModule
  ],
  declarations: [RolesViewComponent]
})
export class RolesViewModule { }
