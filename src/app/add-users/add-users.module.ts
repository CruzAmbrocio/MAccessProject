import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUsersRoutingModule } from './add-users-routing.module';
import { AddUsersComponent } from './add-users.component';

@NgModule({
  imports: [
    CommonModule,
    AddUsersRoutingModule
  ],
  declarations: [AddUsersComponent]
})
export class AddUsersModule { }
