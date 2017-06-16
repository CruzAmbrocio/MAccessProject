import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRolRoutingModule } from './add-rol-routing.module';
import { AddRolComponent } from './add-rol.component';

@NgModule({
  imports: [
    CommonModule,
    AddRolRoutingModule
  ],
  declarations: [AddRolComponent]
})
export class AddRolModule { }
