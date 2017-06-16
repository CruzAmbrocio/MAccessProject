import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterAccessViewRoutingModule } from './register-access-view-routing.module';
import { RegisterAccessViewComponent } from './register-access-view.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterAccessViewRoutingModule
  ],
  declarations: [RegisterAccessViewComponent]
})
export class RegisterAccessViewModule { }
