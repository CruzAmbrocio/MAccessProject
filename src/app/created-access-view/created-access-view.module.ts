import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatedAccessViewRoutingModule } from './created-access-view-routing.module';
import { CreatedAccessViewComponent } from './created-access-view.component';

@NgModule({
  imports: [
    CommonModule,
    CreatedAccessViewRoutingModule
  ],
  declarations: [CreatedAccessViewComponent]
})
export class CreatedAccessViewModule { }
