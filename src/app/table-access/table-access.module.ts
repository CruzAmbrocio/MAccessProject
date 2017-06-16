import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableAccessRoutingModule } from './table-access-routing.module';
import { TableAccessComponent } from './table-access.component';

@NgModule({
  imports: [
    CommonModule,
    TableAccessRoutingModule
  ],
  declarations: [TableAccessComponent]
})
export class TableAccessModule { }
