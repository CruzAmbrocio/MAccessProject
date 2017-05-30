import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//route of the component -- main
import { MainComponent } from './main/main.component';

//route of the component -- login
import { LoginComponent } from './login/login.component';

//route of the component -- control
import { ControlComponent } from './control/control.component';

//route of the component -- users
import { UsersComponent } from './users/users.component';

//route of the component -- locations
import { LocationsComponent } from './locations/locations.component';

//route of the component -- access
import { AccessComponent } from './access/access.component';

//route of the component -- roles
import { RolesComponent } from './roles/roles.component';

//route of the component -- addUsers
import { AddUsersComponent } from './add-users/add-users.component';

//route of the component -- HeaderaddUsers
import { HeaderAddUsersComponent } from './header-add-users/header-add-users.component';

//route of the component -- UserCreate
import { CreateUserComponent } from './create-user/create-user.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,  
    ControlComponent,
    UsersComponent,
    LocationsComponent,
    AccessComponent,
    RolesComponent,
    AddUsersComponent,
    HeaderAddUsersComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
