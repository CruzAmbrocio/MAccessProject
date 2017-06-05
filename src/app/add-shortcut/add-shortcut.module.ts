import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddShortcutRoutingModule } from './add-shortcut-routing.module';
import { AddShortcutComponent } from './add-shortcut.component';

@NgModule({
  imports: [
    CommonModule,
    AddShortcutRoutingModule
  ],
  declarations: [AddShortcutComponent]
})
export class AddShortcutModule { }
