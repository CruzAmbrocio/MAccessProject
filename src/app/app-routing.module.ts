import { NgModule, Component} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ControlComponent } from './control/control.component';
import { UsersComponent } from './users/users.component';
import { LocationsComponent } from './locations/locations.component';
import { AccessComponent } from './access/access.component';
import { RolesComponent } from './roles/roles.component';
import { HeaderAddUsersComponent } from './header-add-users/header-add-users.component';

import { EditRolComponent } from './edit-rol/edit-rol.component';
import { EditRolCheckComponent } from './edit-rol-check/edit-rol-check.component';

import { AddRolComponent } from './add-rol/add-rol.component';
import { AddRoleAccessComponent } from './add-role-access/add-role-access.component';
import { RolCreatedComponent } from './rol-created/rol-created.component';

const routes: Routes = [
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'main',
    component : MainComponent,
    children : [
        {
          path: 'control',
          component : ControlComponent,
          outlet: 'aside'
        },
        {
          path: 'users',
          component : UsersComponent,
          outlet: 'aside'
        },
        {
          path: 'locations',
          component : LocationsComponent,
          outlet: 'aside'
        },
        {
          path: 'access',
          component : AccessComponent,
          outlet: 'aside'
        },
        {
          path: 'roles',
          component : RolesComponent,
          outlet: 'aside'
        }
    ]
  },
  {
    path: 'addUsers',
    component : HeaderAddUsersComponent,
    children: [
    ]
  },
  {
    path: 'editLocationView',
    component : HeaderAddUsersComponent,
    children: [
    ]
  }, 
  {
    path: 'editRolView',
    component : HeaderAddUsersComponent,
    children: [
      {
        path: 'rolEditCheck',
        component : EditRolCheckComponent,
        outlet: 'editUserOutlet'
      },
      {
        path: 'rolEdit',
        component : EditRolComponent,
        outlet: 'editUserOutlet'
      }
    ]
  },{
    path: 'addRolView',
    component : HeaderAddUsersComponent,
    children: [
      {
        path: 'addRoleReg',
        component : AddRolComponent,
        outlet: 'editUserOutlet'
      },
      {
        path: 'rolEditAccess',
        component : AddRoleAccessComponent,
        outlet: 'editUserOutlet'
      },
      {
        path: 'rolCreated',
        component : RolCreatedComponent,
        outlet: 'editUserOutlet'
      }
    ]
  },
  {
    path: 'editUserView',
    component : HeaderAddUsersComponent,
    children: [

    ]
  },
  {
    path: 'editAccessView',
    component : HeaderAddUsersComponent,
    children: [
    ]
  },
   // otherwise redirect to home
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule.forRoot(routes),

    ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
export default RouterModule.forRoot(routes);