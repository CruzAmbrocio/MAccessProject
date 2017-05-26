import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateUserRoutingModule } from './create-user-routing.module';
import { CreateUserComponent } from './create-user.component';

@NgModule({
  imports: [
    CommonModule,
    CreateUserRoutingModule
  ],
  declarations: [CreateUserComponent]
})
export class CreateUserModule { }
