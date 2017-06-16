import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessViewRoutingModule } from './access-view-routing.module';
import { AccessViewComponent } from './access-view.component';

@NgModule({
  imports: [
    CommonModule,
    AccessViewRoutingModule
  ],
  declarations: [AccessViewComponent]
})
export class AccessViewModule { }
