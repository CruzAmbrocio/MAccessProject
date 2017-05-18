import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from '../main/main.component';
import { ControlComponent } from '../control/control.component';
import { UsersComponent } from '../users/users.component';
import { LocationsComponent } from '../locations/locations.component';
import { AccessComponent } from '../access/access.component';
import { RolesComponent } from '../roles/roles.component';
const routes: Routes = [
/*
      {
        path: 'control',
        component : ControlComponent
      },
      {
        path: 'users',
        component : UsersComponent
      },
      {
        path: 'locations',
        component : LocationsComponent
      },
      {
        path: 'access',
        component : AccessComponent
      },
      {
        path: 'roles',
        component : RolesComponent
      }
/*/
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class MainRoutingModule { }
export const routing = RouterModule.forRoot(routes);
