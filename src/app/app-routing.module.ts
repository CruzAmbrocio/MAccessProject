import { NgModule, Component} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ControlComponent } from './control/control.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { LocationsComponent } from './locations/locations.component';
import { AccessComponent } from './access/access.component';
import { RolesComponent } from './roles/roles.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'login',
    component : LoginComponent,
    children : [
        {
          path: 'forgot_password',
          component : ForgotPasswordComponent,
          outlet: 'login_aside'
        }
    ]
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