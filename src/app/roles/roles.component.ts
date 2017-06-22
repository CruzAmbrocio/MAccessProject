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
  styleUrls: ['../add-rol-template/add-rol-template.component.css'],
  templateUrl: '../add-rol-template/add-rol-template.component.html'
})

export class AddModalRol implements CloseGuard, ModalComponent<CustomModalContext>, OnInit {
  context: CustomModalContext;

  wrongAnswer: boolean;
  shouldUseMyClass: boolean;

  public informationRolView: any;
  public registerNewRol: any;
  public createdRol: any;
  public callFunctionRols: any;

  isActive: any;
  isDisabled: any;
  isActive1: any;
  isDisabled1: any;
  currentRoute: any;
  changeIndicator: any;
  changeIndicatorInit: any;
  BackUser: any;
  dotsIndicators: any

  constructor(public modal: Modal, private compiler: Compiler, private injector: Injector, public dialog: DialogRef<CustomModalContext>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
    dialog.setCloseGuard(this);

    this.changeIndicator = this.changeIndicatiors
    this.changeIndicator(true, false, false);
  }
  ngOnInit() {
    this.callFunctionRols = this.changeStepsRoles;
    this.callFunctionRols(true, false, false, false);

    this.isActive = true;
    this.isDisabled = false;
    this.isActive1 = false;
    this.isDisabled1 = true;
    this.BackUser = false;
    this.dotsIndicators = true;
  }
  closeEditRol(value) {
    this.wrongAnswer = value != 5;
    this.dialog.close();
  }
  beforeDismiss(): boolean {
    return true;
  }
  beforeClose(): boolean {
    return this.wrongAnswer;
  }
  deleteWarningAddRol() {
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
  changeStepsRoles(param1, param2, param3) {
    this.informationRolView = param1;
    this.registerNewRol = param2;
    this.createdRol = param3;
    //alert("this.takePictureUser")
  }
  changeIndicatiors(statOne, statTwo, statThree){
    this.currentRoute = "hola"
    if (statOne){
      this.isActive = true;
      this.isDisabled = false;
      this.isActive1 = false;
      this.isDisabled1 = true;
      this.dotsIndicators = true;
    } else if(statTwo){
      this.isActive = false;
      this.isDisabled = true;
      this.isActive1 = true;
      this.isDisabled1 = false;
      this.BackUser = true;
      this.dotsIndicators = true;
    } else if(statThree){
      this.BackUser = false;
      this.dotsIndicators = false;
    }
  }
}
//------------------------------------------------------------------------------
declare var swal: any;
@Component({
  selector: 'modal-content',
  styleUrls: ['../edit-rol-template/edit-rol-template.component.css'],
  templateUrl: '../edit-rol-template/edit-rol-template.component.html'
})

export class EditModalRol implements CloseGuard, ModalComponent<CustomModalContext>, OnInit {
  context: CustomModalContext;

   wrongAnswer: boolean;
   shouldUseMyClass: boolean;

  public roleEdit: any;
  public accessAllowed: any;
  public callFunctionEditRols: any;

  isActive: any;
  isDisabled: any;
  isActive1: any;
  isDisabled1: any;
  currentRoute: any;
  changeIndicator: any;
  changeIndicatorInit: any;
  BackUser: any;
  dotsIndicators: any

  constructor(public modal: Modal, private compiler: Compiler, private injector: Injector, public dialog: DialogRef<CustomModalContext>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
    dialog.setCloseGuard(this);

    this.changeIndicatiorsEdit = this.changeIndicatiorsEdit
    this.changeIndicatiorsEdit(true, false, false);
  }
  ngOnInit() {
    this.callFunctionEditRols = this.changeStepsEditeRoles;
    this.callFunctionEditRols(true, false, false, false);

    this.isActive = true;
    this.isDisabled = false;
    this.isActive1 = false;
    this.isDisabled1 = true;
    this.BackUser = false;
    this.dotsIndicators = true;
  }
  closeEditRol(value) {
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
  changeStepsEditeRoles(paramRolEdit, paramAllowed, paramEditRol) {
    this.roleEdit = paramRolEdit;
    this.accessAllowed = paramAllowed;
    this.callFunctionEditRols = paramEditRol;
    //alert("this.takePictureUser")
  }
  changeIndicatiorsEdit(statOne, statTwo, statThree){
    this.currentRoute = "hola"
    if (statOne){
      this.isActive = true;
      this.isDisabled = false;
      this.isActive1 = false;
      this.isDisabled1 = true;
      this.dotsIndicators = true;
    } else if(statTwo){
      this.isActive = false;
      this.isDisabled = true;
      this.isActive1 = true;
      this.isDisabled1 = false;
      this.BackUser = true;
      this.dotsIndicators = true;
    } else if(statThree){
      this.BackUser = false;
      this.dotsIndicators = false;
    }
  }

}
//------------------------------------------------------------------------------
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(public modal: Modal) { }

  ngOnInit() {
  }
  openEditRoles() {
    this.modal.open(EditModalRol , overlayConfigFactory({ num1: 2, num2: 3 }));
  }
  openAddRoles() {
    this.modal.open(AddModalRol, overlayConfigFactory({ num1: 2, num2: 3 }));
  }
}
