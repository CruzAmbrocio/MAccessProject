import { Component, OnInit, Input, NgModule, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { Compiler,  Injector, TemplateRef, ViewChild, NgModuleRef } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Router, NavigationEnd } from '@angular/router';
//------------------------------------------------------------------------------
export class CustomModalContext extends BSModalContext {
  public num1: number;
  public num2: number;
}
//------------------------------------------------------------------------------
declare var swal: any;
@Component({
  selector: 'modal-content',
  styleUrls: ['../add-access-template/add-access-template.component.css'],
  templateUrl: '../add-access-template/add-access-template.component.html'
})

export class AddModalAccess implements CloseGuard, ModalComponent<CustomModalContext>, OnInit {
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
  closeAddAccess(value) {
    this.wrongAnswer = value != 5;
    this.dialog.close();
  }

  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.wrongAnswer;
  }

  deleteWarningEdit() {
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
  selector: 'modal-content',
  styleUrls: ['../edit-access-template/edit-access-template.component.css'],
  templateUrl: '../edit-access-template/edit-access-template.component.html'
})

export class editModalAccess implements CloseGuard, ModalComponent<CustomModalContext>, OnInit {
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
  closeEditAccess(value) {
    this.wrongAnswer = value != 5;
    this.dialog.close();
  }

  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.wrongAnswer;
  }

  deleteWarningEdit() {
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
@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})

export class AccessComponent implements OnInit {

  constructor(public modal: Modal) { }

  ngOnInit() {
  }
  openEditAccess() {
    this.modal.open(editModalAccess, overlayConfigFactory({ num1: 2, num2: 3 }));
  }
  openAddAccess() {
    this.modal.open(AddModalAccess, overlayConfigFactory({ num1: 2, num2: 3 }));
  }
}