import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolCreatedRoutingModule } from './rol-created-routing.module';
import { RolCreatedComponent } from './rol-created.component';

@NgModule({
  imports: [
    CommonModule,
    RolCreatedRoutingModule
  ],
  declarations: [RolCreatedComponent]
})
export class RolCreatedModule { }
