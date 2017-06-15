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
import { AddUsersComponent } from './add-users/add-users.component';
import { HeaderAddUsersComponent } from './header-add-users/header-add-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AddShortcutComponent } from './add-shortcut/add-shortcut.component';
import { UbicationEditComponent } from './ubication-edit/ubication-edit.component';
import { UbicationChangeComponent } from './ubication-change/ubication-change.component';
import { EditRolComponent } from './edit-rol/edit-rol.component';
import { EditRolCheckComponent } from './edit-rol-check/edit-rol-check.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LocationRegisterComponent } from './location-register/location-register.component';
import { LocationNewRegisterComponent } from './location-new-register/location-new-register.component';
import { InputCoordinatesComponent } from './input-coordinates/input-coordinates.component';
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
      {
        path: 'photoUser',
        component : AddUsersComponent,
        outlet: 'editUserOutlet'
      },
      {
        path: 'createUser',
        component : CreateUserComponent,
        outlet: 'editUserOutlet'
      },
      {
        path: 'userRegistered',
        component : NewUserComponent,
        outlet: 'editUserOutlet'
      },
      {
        path: 'addShortcut',
        component : AddShortcutComponent,
        outlet: 'editUserOutlet'
      }
    ]
  },
  {
    path: 'editLocationView',
    component : HeaderAddUsersComponent,
    children: [
      {
        path: 'viewLocation',
        component : UbicationEditComponent,
        outlet: 'editUserOutlet'
      },
      {
        path: 'ubicationEdit',
        component : UbicationChangeComponent,
        outlet: 'editUserOutlet'
      },
      {
        path: 'locationRegister',
        component : LocationRegisterComponent,
        outlet: 'editUserOutlet'
      },
      {
        path: 'locationNewRegister',
        component : LocationNewRegisterComponent,
        outlet: 'editUserOutlet'
      },
       {
        path: 'addCoordenates',
        component : InputCoordinatesComponent,
        outlet: 'editUserOutlet'
      }
    ]
  },{
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
      {
        path: 'editUser',
        component : EditUserComponent,
        outlet: 'editUserOutlet'
      }
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