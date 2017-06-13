import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditUserRoutingModule } from './edit-user-routing.module';
import { EditUserComponent } from './edit-user.component';

@NgModule({
  imports: [
    CommonModule,
    EditUserRoutingModule
  ],
  declarations: [EditUserComponent]
})
export class EditUserModule { }
