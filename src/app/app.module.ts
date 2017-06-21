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
import { LocationsComponent, EditModalLoc, AddModalLoc } from './locations/locations.component';

//route of the component -- access
import { AccessComponent, AddModalAccess, editModalAccess } from './access/access.component';

//route of the component -- roles
import { RolesComponent, AddModalRol, EditModalRol} from './roles/roles.component';


//route of the component -- HeaderaddUsers
import { HeaderAddUsersComponent } from './header-add-users/header-add-users.component';





// to import global data
import { GlobalDataService } from './global.service';



//route of the component -- ubicationChange
import { EditRolComponent } from './edit-rol/edit-rol.component';

//route of the component -- ubicationChange
import { EditRolCheckComponent } from './edit-rol-check/edit-rol-check.component';





//route of the component -- addRole
import { AddRolComponent } from './add-rol/add-rol.component';

//route of the component -- addRoleAccess
import { AddRoleAccessComponent } from './add-role-access/add-role-access.component';

//route of the component -- addRoleAccess
import { RolCreatedComponent } from './rol-created/rol-created.component';




//route of the component -- addUserTemaplate
import { AddUserTemplateComponent } from './add-user-template/add-user-template.component';





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
    HeaderAddUsersComponent,
    EditRolComponent,
    EditRolCheckComponent,

    AddRolComponent,
    AddRoleAccessComponent,
    RolCreatedComponent,
    AddUserTemplateComponent,
    //AdditionCalculateWindow,
    CustomModal,
    EditModal,
    EditModalLoc ,
    AddModalLoc,
    AddModalAccess,
    editModalAccess,
    AddModalRol,
    EditModalRol

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
  entryComponents: [
    CustomModal,
    EditModal,
    EditModalLoc,
    AddModalLoc,
    AddModalAccess,
  editModalAccess,
  AddModalRol,
  EditModalRol
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    CustomModal,
    EditModal,
    EditModalLoc,
    AddModalLoc,
    AddModalAccess,
    editModalAccess,
    AddModalRol,
    EditModalRol
  ],
})
export class AppModule { }
