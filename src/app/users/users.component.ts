import { Component, OnInit, NgModule, Input, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, NgbActiveModal, ModalDismissReasons, } from '@ng-bootstrap/ng-bootstrap';
import { AddUserTemplateComponent } from '../add-user-template/add-user-template.component';


import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { AdditionCalculateWindow, AdditionCalculateWindowData } from '../add-user-template/add-user-template.component';
  //templateUrl: '../add-user-template/add-user-template.component.html',

declare var swal: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private modalService: NgbModal, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {

  }

  openCustom() {
    this.modal.open(AdditionCalculateWindow, new AdditionCalculateWindowData(2, 3));
  }

  closeResult: string;



  // ------------------------------------------------------
  deleteRow() {
    swal({
      html:`
            <div class="cirleImgDel">  
              <img class="imgDelete" src="../assets/iconos/icon_eliminar.png">
            </div>
            <p class="textGrayBold">¿Eliminar Usuario Definitivamente?</p>
            <p class="textGrayReg">El usuario se eliminará permanentemente.</p>`,
      showCancelButton: true,
      confirmButtonClass:"btnDelete",
      cancelButtonClass:"btnCancel",
      confirmButtonText:
        'Eliminar',
      cancelButtonText:
        'Cancelar'
    })
  }
  //-------------------------------------------------------
}

/*
import { Component, OnInit, NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUserTemplateComponent } from '../add-user-template/add-user-template.component';
@Component({
  selector: 'ngbd',
  templateUrl: '../add-user-template/add-user-template.component.html',
})
export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}

declare var swal: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open() {
    console.log("sdfsdfsdfsdfsdfsdfs");
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }




  // ------------------------------------------------------
  deleteRow() {
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
  //-------------------------------------------------------
}
*/