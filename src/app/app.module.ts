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
import { UsersComponent, CustomModal, EditModal } from './users/users.component';

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

//route of the component -- UserRegistered
import { NewUserComponent } from './new-user/new-user.component';

//route of the component -- AddShortCut
import { AddShortcutComponent } from './add-shortcut/add-shortcut.component';

// to import global data
import { GlobalDataService } from './global.service';

//route of the component -- editUbication
import { UbicationEditComponent } from './ubication-edit/ubication-edit.component';

//route of the component -- ubicationChange
import { UbicationChangeComponent } from './ubication-change/ubication-change.component';

//route of the component -- ubicationChange
import { EditRolComponent } from './edit-rol/edit-rol.component';

//route of the component -- ubicationChange
import { EditRolCheckComponent } from './edit-rol-check/edit-rol-check.component';


//route of the component -- Edit User
import { EditUserComponent } from './edit-user/edit-user.component';

//route of the component -- LocationRegister
import { LocationRegisterComponent } from './location-register/location-register.component';

//route of the component -- LocationNew
import { LocationNewRegisterComponent } from './location-new-register/location-new-register.component';

//route of the component -- addCoordenadas
import { InputCoordinatesComponent } from './input-coordinates/input-coordinates.component';

//route of the component -- addRole
import { AddRolComponent } from './add-rol/add-rol.component';

//route of the component -- addRoleAccess
import { AddRoleAccessComponent } from './add-role-access/add-role-access.component';

//route of the component -- addRoleAccess
import { RolCreatedComponent } from './rol-created/rol-created.component';




//route of the component -- addUserTemaplate
import { AddUserTemplateComponent } from './add-user-template/add-user-template.component';

//route of the component -- addCoordenadas
import { CreatedLocationComponent } from './created-location/created-location.component';
import { AccessViewComponent } from './access-view/access-view.component';
import { TableAccessComponent } from './table-access/table-access.component';
import { AddAccessComponent } from './add-access/add-access.component';
import { AccessEditComponent } from './access-edit/access-edit.component';
import { RegisterAccessViewComponent } from './register-access-view/register-access-view.component';
import { AccessNewViewComponent } from './access-new-view/access-new-view.component';
import { CreatedAccessViewComponent } from './created-access-view/created-access-view.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';


//import { AdditionCalculateWindow } from './add-user-template/add-user-template.component';
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
    CreateUserComponent,
    NewUserComponent,
    AddShortcutComponent,
    UbicationEditComponent,
    UbicationChangeComponent,
    EditRolComponent,
    EditRolCheckComponent,
    EditUserComponent,
    LocationRegisterComponent,
    LocationNewRegisterComponent,
    InputCoordinatesComponent,

    AddRolComponent,
    AddRoleAccessComponent,
    RolCreatedComponent,
    AddUserTemplateComponent,
    //AdditionCalculateWindow,


    CreatedLocationComponent,
    CreatedLocationComponent,
    AccessViewComponent,
    TableAccessComponent,
    AccessEditComponent,
    AddAccessComponent,
    RegisterAccessViewComponent,
    AccessNewViewComponent,
    CreatedAccessViewComponent,
    InputCoordinatesComponent,
    CustomModal, EditModal

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    BootstrapModalModule,
    
  ],
  providers: [
    GlobalDataService,
    NgbActiveModal,
    
  ],
  entryComponents: [CustomModal, EditModal],
  bootstrap: [
    AppComponent
  ],
  exports: [CustomModal, EditModal],
})
export class AppModule { }
