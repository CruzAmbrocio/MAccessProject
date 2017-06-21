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

  public registerAccessNew: any;
  public tableAccessAddData: any;
  public selectionAccessType: any;
  public createdAccess: any;
  public callFunctionAccess: any;
  public changeText:any;

 isActive: any;
 isDisabled: any;
 isActive1: any;
 isDisabled1: any;
 isActive2: any;
 isDisabled2: any;
 changeIndicator: any;
 BackAddLoc: any;
 BackAddLoc2: any;
 dotsIndicators: any

  constructor(public modal: Modal, private compiler: Compiler, private injector: Injector, public dialog: DialogRef<CustomModalContext>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
    dialog.setCloseGuard(this);

    this.changeIndicator = this.changeIndicatiors
    this.changeIndicator(true, false, false);
  }
  ngOnInit() {
    this.callFunctionAccess = this.changeStepsAccessNew;
    this.callFunctionAccess(true, false, false, false);
    this.changeText = "Siguiente";
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
  changeIndicatiors(statOne, statTwo, statThree, statFour) {
    if (statOne) {
      this.isActive = true;
      this.isDisabled = false;
      this.isActive1 = false;
      this.isDisabled1 = true;
      this.isActive2 = false;
      this.isDisabled2 = true;

      this.BackAddLoc = false;
      this.BackAddLoc2 = false;
      this.dotsIndicators = true;
    } else if (statTwo) {
      this.isActive = false;
      this.isDisabled = true;
      this.isActive1 = true;
      this.isDisabled1 = false;
      this.isActive2 = false;
      this.isDisabled2 = true;

      this.BackAddLoc = true;
      this.BackAddLoc2 = false;
      this.dotsIndicators = true;
    } else if ( statThree) {
      this.isActive = false;
      this.isDisabled = true;
      this.isActive1 = false;
      this.isDisabled1 = true;
      this.isActive2 = true;
      this.isDisabled2 = false;

      this.BackAddLoc = false;
      this.BackAddLoc2 = true
      this.dotsIndicators = true;
    } else if (statFour) {
      this.BackAddLoc = false;
      this.BackAddLoc2 = false;
      this.dotsIndicators = false;
    }
  }
   changeStepsAccessNew(viewRegAccess, viewTabAddAccess, viewSelAccess, viewCreaAccess) {
    this.registerAccessNew = viewRegAccess;
    this.tableAccessAddData = viewTabAddAccess;
    this.selectionAccessType = viewSelAccess;
    this.createdAccess = viewCreaAccess;
    console.log("holis");
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

  public accessEdit: any;
  public tableAccessEdit: any;
  public editSelectionAccessType: any;
  public callFunctionAccessEdit: any;
  //public changeText:any;

  isActive: any;
  isDisabled: any;
  isActive1: any;
  isDisabled1: any;
  isActive2: any;
  isDisabled2: any;
  changeIndicator: any;
  BackAddLoc: any;
  BackAddLoc2: any;
  dotsIndicators: any

  constructor(public modal: Modal, private compiler: Compiler, private injector: Injector, public dialog: DialogRef<CustomModalContext>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
    dialog.setCloseGuard(this);

    this.changeIndicator = this.changeIndicatiors
    this.changeIndicator(true, false, false);
  }
  ngOnInit() {
    this.callFunctionAccessEdit = this.changeStepsAccessEdit;
    this.callFunctionAccessEdit(true, false, false, false);
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
   changeStepsAccessEdit(viewEdit, viewTabAccessEdit, viewAccessEdit) {
    this.accessEdit = viewEdit;
    this.tableAccessEdit = viewTabAccessEdit;
    this.editSelectionAccessType = viewAccessEdit;
  }
  changeIndicatiors(statOne, statTwo, statThree, statFour) {
    if (statOne) {
      this.isActive = true;
      this.isDisabled = false;
      this.isActive1 = false;
      this.isDisabled1 = true;
      this.isActive2 = false;
      this.isDisabled2 = true;

      this.BackAddLoc = false;
      this.BackAddLoc2 = false;
      this.dotsIndicators = true;
    } else if (statTwo) {
      this.isActive = false;
      this.isDisabled = true;
      this.isActive1 = true;
      this.isDisabled1 = false;
      this.isActive2 = false;
      this.isDisabled2 = true;

      this.BackAddLoc = true;
      this.BackAddLoc2 = false;
      this.dotsIndicators = true;
    } else if ( statThree) {
      this.isActive = false;
      this.isDisabled = true;
      this.isActive1 = false;
      this.isDisabled1 = true;
      this.isActive2 = true;
      this.isDisabled2 = false;

      this.BackAddLoc = false;
      this.BackAddLoc2 = true
      this.dotsIndicators = true;
    } else if (statFour) {
      this.BackAddLoc = false;
      this.BackAddLoc2 = false;
      this.dotsIndicators = false;
    }
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