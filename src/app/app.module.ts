import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//route of the component -- main
import { MainComponent } from './main/main.component';
//route of the component -- login
import { LoginComponent, forgotPassModal } from './login/login.component';
//route of the component -- users
import { UsersComponent, CustomModal, EditModal } from './users/users.component';
//route of the component -- locations
import { LocationsComponent, EditModalLoc, AddModalLoc } from './locations/locations.component';
//route of the component -- access
import { AccessComponent, AddModalAccess, editModalAccess } from './access/access.component';
//route of the component -- roles
import { RolesComponent, AddModalRol, EditModalRol} from './roles/roles.component';
// to import global data
import { GlobalDataService } from './global.service';
//route of the component -- addUserTemaplate
import { AddUserTemplateComponent } from './add-user-template/add-user-template.component';
//route of the component -- control
import { ControlComponent } from './control/control.component';

//route of the component -- forgot-password
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

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
    AddUserTemplateComponent,
    CustomModal,
    EditModal,
    EditModalLoc ,
    AddModalLoc,
    AddModalAccess,
    editModalAccess,
    AddModalRol,
    EditModalRol,
    ForgotPasswordComponent,
    forgotPassModal,

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
    EditModalRol,
    forgotPassModal
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
    EditModalRol,
    forgotPassModal
  ],
})
export class AppModule { }
