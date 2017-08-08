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
  styleUrls: ['../forgot-password/forgot-password.component.css'],
  templateUrl: '../forgot-password/forgot-password.component.html'
})

export class forgotPassModal implements CloseGuard, ModalComponent<CustomModalContext>, OnInit {
  context: CustomModalContext;

  wrongAnswer: boolean;
  shouldUseMyClass: boolean;

  stepOne: boolean;
  stepTwo: boolean;
  stepThree: boolean;

  constructor(public modal: Modal, private compiler: Compiler, private injector: Injector, public dialog: DialogRef<CustomModalContext>) {
    this.stepOne = true;
    this.stepTwo = false;
    this.stepThree = false;
  }
  ngOnInit() {

  }
  closeForgotPass() {
    this.dialog.close();
  }

  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.wrongAnswer;
  }

  deleteWarningEdit() {
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

  changeStepForgotPass(one, two, three){
    this.stepOne = one;
    this.stepTwo = two;
    this.stepThree = three;
  }
}

//------------------------------------------------------------------------------
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public modal: Modal) { }

  ngOnInit() {
  }

  openForgotPassword() {
    this.modal.open(forgotPassModal, overlayConfigFactory({ num1: 2, num2: 3 }));
  }
}