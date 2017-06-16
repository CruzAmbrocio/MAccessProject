import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessNewViewRoutingModule } from './access-new-view-routing.module';
import { AccessNewViewComponent } from './access-new-view.component';

@NgModule({
  imports: [
    CommonModule,
    AccessNewViewRoutingModule
  ],
  declarations: [AccessNewViewComponent]
})
export class AccessNewViewModule { }
