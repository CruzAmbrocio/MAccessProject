import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewUserRoutingModule } from './new-user-routing.module';
import { NewUserComponent } from './new-user.component';

@NgModule({
  imports: [
    CommonModule,
    NewUserRoutingModule
  ],
  declarations: [NewUserComponent]
})
export class NewUserModule { }
