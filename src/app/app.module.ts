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

<<<<<<< HEAD
//route of the component -- HeaderaddUsers
import { HeaderAddUsersComponent } from './header-add-users/header-add-users.component';

// to import global data
import { GlobalDataService } from './global.service';
=======

//route of the component -- HeaderaddUsers
import { HeaderAddUsersComponent } from './header-add-users/header-add-users.component';





// to import global data
import { GlobalDataService } from './global.service';



>>>>>>> 9849712736ac5c9f15da9459cc7156225e87b4c8
//route of the component -- ubicationChange
import { EditRolComponent } from './edit-rol/edit-rol.component';

//route of the component -- ubicationChange
import { EditRolCheckComponent } from './edit-rol-check/edit-rol-check.component';
<<<<<<< HEAD
=======





>>>>>>> 9849712736ac5c9f15da9459cc7156225e87b4c8
//route of the component -- addRole
import { AddRolComponent } from './add-rol/add-rol.component';

//route of the component -- addRoleAccess
import { AddRoleAccessComponent } from './add-role-access/add-role-access.component';
//route of the component -- addRoleAccess
import { RolCreatedComponent } from './rol-created/rol-created.component';
//route of the component -- addUserTemaplate
import { AddUserTemplateComponent } from './add-user-template/add-user-template.component';

<<<<<<< HEAD
=======




>>>>>>> 9849712736ac5c9f15da9459cc7156225e87b4c8
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
<<<<<<< HEAD
    
    HeaderAddUsersComponent,
    EditRolComponent,
    EditRolCheckComponent,
=======
    HeaderAddUsersComponent,
    EditRolComponent,
    EditRolCheckComponent,

>>>>>>> 9849712736ac5c9f15da9459cc7156225e87b4c8
    AddRolComponent,
    AddRoleAccessComponent,
    RolCreatedComponent,
    AddUserTemplateComponent,
<<<<<<< HEAD
=======
    //AdditionCalculateWindow,
>>>>>>> 9849712736ac5c9f15da9459cc7156225e87b4c8
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
