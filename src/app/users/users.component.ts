import { Component, OnInit, NgModule, Input, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, NgbActiveModal, ModalDismissReasons, } from '@ng-bootstrap/ng-bootstrap';
import { AddUserTemplateComponent } from '../add-user-template/add-user-template.component';


import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

//import { AdditionCalculateWindow, AdditionCalculateWindowData } from '../add-user-template/add-user-template.component';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { Compiler,  Injector, TemplateRef, ViewChild, NgModuleRef } from '@angular/core';

export class CustomModalContext extends BSModalContext {
  public num1: number;
  public num2: number;
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */ 
@Component({
  selector: 'modal-content',
  styleUrls: ['../add-user-template/add-user-template.component.css'],
  templateUrl: '../add-user-template/add-user-template.component.html'
})

export class CustomModal implements CloseGuard, ModalComponent<CustomModalContext>, OnInit{
  context: CustomModalContext;


  public wrongAnswer: boolean;
  public shouldUseMyClass: boolean;

  public takePictureUser: any;
  public publictakePictureUser: any;
  public registerUserAdd: any;
  public createdUser: any;
  public callFunctionUsers: any;

  constructor(public modal: Modal, private compiler: Compiler, private injector: Injector, public dialog: DialogRef<CustomModalContext>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
    dialog.setCloseGuard(this);
  }
  ngOnInit() {
    this.callFunctionUsers = this.changeStepsAddUser;
    this.callFunctionUsers();
  }
  onKeyUp(value) {
    this.wrongAnswer = value != 5;
    this.dialog.close();
  }


  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.wrongAnswer;
  }

  deleteRow() {
    console.log("asdfasdfasdfasdfasdfasdf")
    swal({
      html: `
            <div class="cirleImgDel">  
              <img class="imgDelete" src="../assets/iconos/icon_eliminar.png">
            </div>
            <p class="textGrayBold">¿Eliminar Usuario Definitivamente?</p>
            <p class="textGrayReg">El usuario se eliminará permanentemente.</p>`,
      showCancelButton: true,
      confirmButtonClass: "btnDelete",
      cancelButtonClass: "btnCancel",
      confirmButtonText:
      'Eliminar',
      cancelButtonText:
      'Cancelar'
    })
  }

  changeStepsAddUser() {
    this.registerUserAdd = true;
    this.takePictureUser = false;
    this.createdUser = false;
    //alert("this.takePictureUser")

  }
}
//------------------------------------------------------------------------------
@Component({
  selector: 'modal-content',
  styleUrls: ['../edit-user-template/edit-user-template.component.css'],
  templateUrl: '../edit-user-template/edit-user-template.component.html'
})

export class EditModal implements CloseGuard, ModalComponent<CustomModalContext>, OnInit {
  context: CustomModalContext;


   wrongAnswer: boolean;
   shouldUseMyClass: boolean;

  constructor(public modal: Modal, private compiler: Compiler, private injector: Injector, public dialog: DialogRef<CustomModalContext>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
    dialog.setCloseGuard(this);
  }
  ngOnInit() {
  }
  closeSecond(value) {
    this.wrongAnswer = value != 5;
    this.dialog.close();
  }


  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.wrongAnswer;
  }

  deleteRow2() {
    console.log("asdfasdfasdfasdfasdfasdf")
    swal({
      html: `
            <div class="cirleImgDel">  
              <img class="imgDelete" src="../assets/iconos/icon_eliminar.png">
            </div>
            <p class="textGrayBold">¿Eliminar Usuario Definitivamente?</p>
            <p class="textGrayReg">El usuario se eliminará permanentemente.</p>`,
      showCancelButton: true,
      confirmButtonClass: "btnDelete",
      cancelButtonClass: "btnCancel",
      confirmButtonText:
      'Eliminar',
      cancelButtonText:
      'Cancelar'
    })
  }

}
//------------------------------------------------------------------------------
declare var swal: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input()  name;

  constructor(public modal: Modal) {
  }

   ngOnInit() {
  }

  open() {
    this.modal.open(CustomModal, overlayConfigFactory({ num1: 2, num2: 3 }));
  }

  openEditUser() {
    this.modal.open(EditModal, overlayConfigFactory({ num1: 2, num2: 3 }));
  }

}