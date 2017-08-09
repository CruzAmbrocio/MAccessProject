import { Component, OnInit, ElementRef, NgModule, Input, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, NgbActiveModal, ModalDismissReasons, } from '@ng-bootstrap/ng-bootstrap';
import { AddUserTemplateComponent } from '../add-user-template/add-user-template.component';

import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import {
  Compiler, Injector, TemplateRef, ViewChild, ViewChildren, QueryList, NgModuleRef } from '@angular/core';

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

export class CustomModal implements CloseGuard, ModalComponent<CustomModalContext>, OnInit {
  @ViewChild('myname') input: ElementRef;
  @ViewChild('video') video: ElementRef;

  @ViewChildren('div1,div2,div3') divs: QueryList<ElementRef>;
  context: CustomModalContext;


  public wrongAnswer: boolean;
  public shouldUseMyClass: boolean;

  public takePictureUser: any;
  public publictakePictureUser: any;
  public registerUserAdd: any;
  public createdUser: any;
  public callFunctionUsers: any;
  public shortcutAddUser:any;


//------------------------------------------------------------------------------


  public appearAllContent: any;
  public appearCheckIcon: any;
  public appearTxtNewLoc:boolean=true;

  public appearAllContent2:any
  public appearCheckIcon2: any;
  public appearTxtNewLoc2:boolean=true;

  public appearAllContent3:any
  public appearCheckIcon3: any;
  public appearTxtNewLoc3:boolean=true;

  public appearAllContent4:any
  public appearCheckIcon4: any;
  public appearTxtNewLoc4:boolean=true;

  // Almacenan IDS
  public LocationActiveId:any;
  public LocationLevelTwoActiveId:any;   
  public LocationLevelThreeActiveId:any;
  public LocationLevelFourActiveId:any;
  public arrayToPush:any;

  //Visualizar los niveles
  public viewLocationLevelTwo = false;
  public viewLocationLevelThree = false;
  public viewLocationLevelFour = false;

  public dataLocation: string;
  public dataLocationLevelTwo:string;
  public dataLocationLevelThree:string;
  public dataLocationLevelFour:string;
  public lengthLocArray:any;

   public locationJson = {
    "ParentLocation": [
        {
          id: "Location1",
          Name:"Zona Pradera"
        },
        {
          id: "Location2",
          Name:"Europlaza"
        }
      ],
    "LocationLevelTwo" : [
        {
          id: "Location1",
          idLevelTwo: "LevelTwo1",
          Name:"Torre 1"
        },
        {
          id: "Location1",
          idLevelTwo: "LevelTwo2",
          Name:"Torre 2"
        },
        {
          id: "Location1",
          idLevelTwo: "LevelTwo3",
          Name:"Torre 3"
        },
        {
          id: "Location1",
          idLevelTwo: "LevelTwo4",
          Name:"Torre 4"
        },
        {
          id: "Location1",
          idLevelTwo: "LevelTwo5",
          Name:"Torre 5"
        }
    ],

    "LocationLevelThree" : [
      {
        idLevelTwo: "LevelTwo1",
        idLevelThree: "LevelThree1",
        Name:"Oficina 101"
      },
      {
        idLevelTwo: "LevelTwo1",
        idLevelThree: "LevelThree2",
        Name:"Oficina 102"
      },
      {
        idLevelTwo: "LevelTwo1",
        idLevelThree: "LevelThree3",
        Name:"Oficina 103"
      },
      {
        idLevelTwo: "LevelTwo2",
        idLevelThree: "LevelThree4",
        Name:"Oficina 201"
      },
      {
        idLevelTwo: "LevelTwo2",
        idLevelThree: "LevelThree5",
        Name:"Oficina 202"
      }
    ],

    "LocationLevelFour" : [
      {
        idLevelThree: "LevelThree1",
        idLevelFour: "LevelFour1",
        Name:"Salon 1"
      },
      {
        idLevelThree: "LevelThree1",
        idLevelFour: "LevelFour2",
        Name:"Salon 2"
      },
      {
        idLevelThree: "LevelThree1",
        idLevelFour: "LevelFour3",
        Name:"Bodega"
      },
      {
        idLevelThree: "LevelThree1",
        idLevelFour: "LevelFour4",
        Name:"Salon Control"
      },
      {
        idLevelThree: "LevelThree1",
        idLevelFour: "LevelFour5",
        Name:"Sala Reuniones Principal"
      }
    ]
  };
  public indexLocationView = [];

//------------------------------------------------------------------------------

  isActive: any;
  isDisabled: any;
  isActive1: any;
  isDisabled1: any;
  currentRoute: any;
  changeIndicator: any;
  changeIndicatorInit: any;
  BackUser: any;
  dotsIndicators: any
  public width:any 
  public height:any
  public archivo:any


  public url:any
  public result:any

  public activeNextBtn:any
  public inactiveNextBtn:any
  public takedPhoto:any
  public unusedPhoto:any

  public videoTag:any;
  public imgSnap:any;
  public controlsCont:any;
  public canvasVideoTag:any;
  public shadowVideo:any;

  public activeCamera:any;
  public _video:any

  public countActive:any

  constructor(  public modal: Modal, private compiler: Compiler, private injector: Injector, public dialog: DialogRef<CustomModalContext>) {
    this.context = dialog.context;
    dialog.setCloseGuard(this);

      this.changeIndicator = this.changeIndicatiors
      this.changeIndicator(true, false, false);

      this.videoTag = false;
      this.imgSnap = false;
      this.controlsCont = false;
      this.canvasVideoTag = false;
      this.shadowVideo = false;
  }
  ngOnInit() {
    this.callFunctionUsers = this.changeStepsAddUser;
    this.callFunctionUsers(true, false, false, false);

    this.isActive = true;
    this.isDisabled = false;
    this.isActive1 = false;
    this.isDisabled1 = true;
    this.BackUser = false;
    this.dotsIndicators = true;

    this.activeNextBtn = false;
    this.inactiveNextBtn = true;
    this.takedPhoto = false;
    this.unusedPhoto = true;

  }
  onKeyUp(value) {
    this.dialog.close();
  }
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
changeIndicatiors(statOne, statTwo, statThree, statFour){
    if (statOne){
      this.isActive = true;
      this.isDisabled = false;
      this.isActive1 = false;
      this.isDisabled1 = true;
      this.dotsIndicators = true;
      this.BackUser = false;
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
    }else if (statFour) {
      this.isActive = false;
      this.isDisabled = true;
      this.isActive1 = true;
      this.isDisabled1 = false;
      this.BackUser = true;
      this.dotsIndicators = true;
    }
  }  
  changeStepsAddUser(param1, param2, param3, param4, addShortCut) {
    if (addShortCut){
      this.takePictureUser = false;
      this.registerUserAdd = true;
      this.createdUser = false;
      this.shortcutAddUser = false;
    }else{
      this.takePictureUser = param1;
      this.registerUserAdd = param2;
      this.createdUser = param3;
      this.shortcutAddUser = param4;
    }
    //alert("this.takePictureUser")
  }

  types:any[]=[
    {id:'C-Level',Name:'C-Level'},
    {id:'IT',Name:'IT'},
    {id:'Marketing',Name:'Marketing'},
    {id:'Mantenimiento',Name:'Mantenimiento'},
    {id:'Ventas',Name:'ventasddd'}
  ];
  /*item to be preselected should be in the below object which 
  *is returned by the web  service
  */
  selectedElement:any= {id:'IT',Name:'IT'};
  load(val){
  }
//------------------------------------------------------------------------------
//-------------------------------------------------------------
  appearInputAddNewLoc(){
    this.appearAllContent= true;
    this.appearCheckIcon=false;
  }
  appearInputAddNewLoc2(){
    this.appearAllContent2= true;
    this.appearCheckIcon2=false;
  }
  appearInputAddNewLoc3(){
    this.appearAllContent3= true;
    this.appearCheckIcon3=false;
  }
  appearInputAddNewLoc4(){
    this.appearAllContent4= true;
    this.appearCheckIcon4=false;
  }
  onKeyUpShow(value){
    if(value == ''){
      this.appearCheckIcon= false;
    }else{
      this.appearCheckIcon= true;
      this.appearTxtNewLoc=false;
    }
  }
  onKeyUpShow2(value){
    if(value == ''){
      this.appearCheckIcon2= false;
    }else{
      this.appearCheckIcon2= true;
      this.appearTxtNewLoc2=false;
    }
  }
  onKeyUpShow3(value){
    if(value == ''){
      this.appearCheckIcon3= false;
    }else{
      this.appearCheckIcon3= true;
      this.appearTxtNewLoc3=false;
    }
  }
  onKeyUpShow4(value){
    if(value == ''){
      this.appearCheckIcon4= false;
    }else{
      this.appearCheckIcon4= true;
      this.appearTxtNewLoc4=false;
    }
  }

  selectParentLocation(index, locationID) {
    this.LocationActiveId = index;
    this.LocationLevelTwoActiveId = -1;
    this.LocationLevelThreeActiveId = -1;
    this.viewLocationLevelTwo = true;
    this.viewLocationLevelThree = false;
    this.viewLocationLevelFour = false;
    this.dataLocation = locationID;

    if (this.indexLocationView[0] != undefined) {
      this.indexLocationView[0] = this.locationJson.ParentLocation[index].Name;
    } else {
      this.indexLocationView.push(this.locationJson.ParentLocation[index].Name);
    }

    if (this.indexLocationView[1] != undefined) {
      this.indexLocationView.splice(1);
    }
  }

  selectLocationLevelTwo(index, locationID, LevelTwoId) {
    this.LocationLevelTwoActiveId = index;
    this.LocationLevelThreeActiveId = -1;
    this.viewLocationLevelThree = true;
    this.viewLocationLevelFour = false;
    this.dataLocation = locationID;
    this.dataLocationLevelTwo = LevelTwoId;

    if (this.indexLocationView[1] != undefined) {
      this.indexLocationView[1] = this.locationJson.LocationLevelTwo[index].Name;
    } else {
      this.indexLocationView.push(this.locationJson.LocationLevelTwo[index].Name);
    }

    if (this.indexLocationView[2] != undefined) {
      this.indexLocationView.splice(2);
    }
  }

  selectLocationLevelThree(index, LevelThreeId){
    this.LocationLevelThreeActiveId = index;
    this.dataLocationLevelThree = LevelThreeId;
    this.LocationLevelFourActiveId = -1;
    this.viewLocationLevelFour = true;

    if (this.indexLocationView[2] != undefined) {
      this.indexLocationView[2] = this.locationJson.LocationLevelThree[index].Name;
    } else {
      this.indexLocationView.push(this.locationJson.LocationLevelThree[index].Name);
    }

    if (this.indexLocationView[3] != undefined) {
      this.indexLocationView.splice(3);
    }
  }

  selectLocationLevelFour(index, LevelFourId){
    this.LocationLevelFourActiveId = index;

    if (this.indexLocationView[3] != undefined) {
      this.indexLocationView[3] = this.locationJson.LocationLevelFour[index].Name;
    } else {
      this.indexLocationView.push(this.locationJson.LocationLevelFour[index].Name);
    }
  }

  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event) => {
        this.url = event.target["result"];
        this.activeNextBtn = true;
        this.inactiveNextBtn = false;
        this.takedPhoto = true;
        this.unusedPhoto = false;  
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  ableCamera(){
    this.activeNextBtn = false;
    this.inactiveNextBtn = true;
    this.takedPhoto = false;
    this.unusedPhoto = false;

    this.videoTag = true;
    this.imgSnap = true;
    this.controlsCont = true;
    this.canvasVideoTag = true;
    this.shadowVideo = true;

    this.activeCamera = this.initCameraRecord;
    this.activeCamera();
  }

  initCameraRecord() {
    try {
      let _video = this.video.nativeElement;
      console.log("funciona")
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          _video.src = window.URL.createObjectURL(stream);
          _video.play();
          _video.onplay = function() {

          };
        }).catch(function (e) {
          console.log("There was an error" + + Error.name, Error);
        });
      }     
    }
    catch(err) {
      console.log("doesnt work")
    }
  }

  takePhotos(){
    // References to all the element we will need.
    var video = document.querySelector('video'),
        image = document.querySelector('#snap')

    var snap = this.takeSnapshot();

    // Show image. 
    image.setAttribute('src', snap);

    // Pause video playback of stream.
    video.pause();
  } 

  takeSnapshot() {
    // References to all the element we will need.
    var video = document.querySelector('video')

    // Here we're using a trick that involves a hidden canvas element.  
    var hidden_canvas = document.querySelector('canvas'),
    context = hidden_canvas.getContext('2d');

    var width = video.videoWidth;
    var height = video.videoHeight;

    if (width && height) {
      // Setup a canvas with the same dimensions as the video.
      hidden_canvas.width = width;
      hidden_canvas.height = height;

      // Turn the canvas image into a dataURL that can be used as a src for our photo.
      return hidden_canvas.toDataURL('image/png');
    }
  }

  deletePhoto(){
    // References to all the element we will need.
    var video = document.querySelector('video'),
    image = document.querySelector('#snap')

    // Hide image.
    image.setAttribute('src', "");
    image.classList.remove("visible");

    // Resume playback of stream.
    video.play();
  }

  tryAgainPhoto(){
    this.activeNextBtn = false;
    this.inactiveNextBtn = true;
    this.takedPhoto = true;
    this.unusedPhoto = false;
  }
//------------------------------------------------------------------------------

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
   shortcutEditUser:any;
   shortcutUserTable:any;
   callFunctionUserseEdit:any;


//------------------------------------------------------------------------------

  public appearAllContent: any;
  public appearCheckIcon: any;
  public appearTxtNewLoc:boolean=true;

  public appearAllContent2:any
  public appearCheckIcon2: any;
  public appearTxtNewLoc2:boolean=true;

  public appearAllContent3:any
  public appearCheckIcon3: any;
  public appearTxtNewLoc3:boolean=true;

  public appearAllContent4:any
  public appearCheckIcon4: any;
  public appearTxtNewLoc4:boolean=true;

  // Almacenan IDS
  public LocationActiveId:any;
  public LocationLevelTwoActiveId:any;   
  public LocationLevelThreeActiveId:any;
  public LocationLevelFourActiveId:any;
  public arrayToPush:any;

  //Visualizar los niveles
  public viewLocationLevelTwo = false;
  public viewLocationLevelThree = false;
  public viewLocationLevelFour = false;

  public dataLocation: string;
  public dataLocationLevelTwo:string;
  public dataLocationLevelThree:string;
  public dataLocationLevelFour:string;
  public lengthLocArray:any;

   public locationJson = {
    "ParentLocation": [
        {
          id: "Location1",
          Name:"Zona Pradera"
        },
        {
          id: "Location2",
          Name:"Europlaza"
        }
      ],
    "LocationLevelTwo" : [
        {
          id: "Location1",
          idLevelTwo: "LevelTwo1",
          Name:"Torre 1"
        },
        {
          id: "Location1",
          idLevelTwo: "LevelTwo2",
          Name:"Torre 2"
        },
        {
          id: "Location1",
          idLevelTwo: "LevelTwo3",
          Name:"Torre 3"
        },
        {
          id: "Location1",
          idLevelTwo: "LevelTwo4",
          Name:"Torre 4"
        },
        {
          id: "Location1",
          idLevelTwo: "LevelTwo5",
          Name:"Torre 5"
        }
    ],

    "LocationLevelThree" : [
      {
        idLevelTwo: "LevelTwo1",
        idLevelThree: "LevelThree1",
        Name:"Oficina 101"
      },
      {
        idLevelTwo: "LevelTwo1",
        idLevelThree: "LevelThree2",
        Name:"Oficina 102"
      },
      {
        idLevelTwo: "LevelTwo1",
        idLevelThree: "LevelThree3",
        Name:"Oficina 103"
      },
      {
        idLevelTwo: "LevelTwo2",
        idLevelThree: "LevelThree4",
        Name:"Oficina 201"
      },
      {
        idLevelTwo: "LevelTwo2",
        idLevelThree: "LevelThree5",
        Name:"Oficina 202"
      }
    ],

    "LocationLevelFour" : [
      {
        idLevelThree: "LevelThree1",
        idLevelFour: "LevelFour1",
        Name:"Salon 1"
      },
      {
        idLevelThree: "LevelThree1",
        idLevelFour: "LevelFour2",
        Name:"Salon 2"
      },
      {
        idLevelThree: "LevelThree1",
        idLevelFour: "LevelFour3",
        Name:"Bodega"
      },
      {
        idLevelThree: "LevelThree1",
        idLevelFour: "LevelFour4",
        Name:"Salon Control"
      },
      {
        idLevelThree: "LevelThree1",
        idLevelFour: "LevelFour5",
        Name:"Sala Reuniones Principal"
      }
    ]
  };
  public indexLocationView = [];
//------------------------------------------------------------------------------
  constructor(public modal: Modal, private compiler: Compiler, private injector: Injector, public dialog: DialogRef<CustomModalContext>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
    dialog.setCloseGuard(this);
  }
  ngOnInit() {
    this.callFunctionUserseEdit = this.changeStepsEditUser;
    this.callFunctionUserseEdit(true, false);    
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
  changeStepsEditUser(param1, para2) {
    this.shortcutEditUser = param1;
    this.shortcutUserTable = para2;
  }
  types:any[]=[
    {id:'C-Level',Name:'C-Level'},
    {id:'IT',Name:'IT'},
    {id:'Marketing',Name:'Marketing'},
    {id:'Mantenimiento',Name:'Mantenimiento'},
    {id:'Ventas',Name:'ventasddd'}
  ];
  /*item to be preselected should be in the below object which 
  *is returned by the web  service
  */
  selectedElement:any= {id:'IT',Name:'IT'};
  load(val){
  }
//-------------------------------------------------------------
  appearInputAddNewLoc(){
    this.appearAllContent= true;
    this.appearCheckIcon=false;
  }
  appearInputAddNewLoc2(){
    this.appearAllContent2= true;
    this.appearCheckIcon2=false;
  }
  appearInputAddNewLoc3(){
    this.appearAllContent3= true;
    this.appearCheckIcon3=false;
  }
  appearInputAddNewLoc4(){
    this.appearAllContent4= true;
    this.appearCheckIcon4=false;
  }
  onKeyUpShow(value){
    if(value == ''){
      this.appearCheckIcon= false;
    }else{
      this.appearCheckIcon= true;
      this.appearTxtNewLoc=false;
    }
  }
  onKeyUpShow2(value){
    if(value == ''){
      this.appearCheckIcon2= false;
    }else{
      this.appearCheckIcon2= true;
      this.appearTxtNewLoc2=false;
    }
  }
  onKeyUpShow3(value){
    if(value == ''){
      this.appearCheckIcon3= false;
    }else{
      this.appearCheckIcon3= true;
      this.appearTxtNewLoc3=false;
    }
  }
  onKeyUpShow4(value){
    if(value == ''){
      this.appearCheckIcon4= false;
    }else{
      this.appearCheckIcon4= true;
      this.appearTxtNewLoc4=false;
    }
  }

  selectParentLocation(index, locationID) {
    this.LocationActiveId = index;
    this.LocationLevelTwoActiveId = -1;
    this.LocationLevelThreeActiveId = -1;
    this.viewLocationLevelTwo = true;
    this.viewLocationLevelThree = false;
    this.viewLocationLevelFour = false;
    this.dataLocation = locationID;

    if (this.indexLocationView[0] != undefined) {
      this.indexLocationView[0] = this.locationJson.ParentLocation[index].Name;
    } else {
      this.indexLocationView.push(this.locationJson.ParentLocation[index].Name);
    }

    if (this.indexLocationView[1] != undefined) {
      this.indexLocationView.splice(1);
    }
  }

  selectLocationLevelTwo(index, locationID, LevelTwoId) {
    this.LocationLevelTwoActiveId = index;
    this.LocationLevelThreeActiveId = -1;
    this.viewLocationLevelThree = true;
    this.viewLocationLevelFour = false;
    this.dataLocation = locationID;
    this.dataLocationLevelTwo = LevelTwoId;

    if (this.indexLocationView[1] != undefined) {
      this.indexLocationView[1] = this.locationJson.LocationLevelTwo[index].Name;
    } else {
      this.indexLocationView.push(this.locationJson.LocationLevelTwo[index].Name);
    }

    if (this.indexLocationView[2] != undefined) {
      this.indexLocationView.splice(2);
    }
  }

  selectLocationLevelThree(index, LevelThreeId){
    this.LocationLevelThreeActiveId = index;
    this.dataLocationLevelThree = LevelThreeId;
    this.LocationLevelFourActiveId = -1;
    this.viewLocationLevelFour = true;

    if (this.indexLocationView[2] != undefined) {
      this.indexLocationView[2] = this.locationJson.LocationLevelThree[index].Name;
    } else {
      this.indexLocationView.push(this.locationJson.LocationLevelThree[index].Name);
    }

    if (this.indexLocationView[3] != undefined) {
      this.indexLocationView.splice(3);
    }
  }

  selectLocationLevelFour(index, LevelFourId){
    this.LocationLevelFourActiveId = index;

    if (this.indexLocationView[3] != undefined) {
      this.indexLocationView[3] = this.locationJson.LocationLevelFour[index].Name;
    } else {
      this.indexLocationView.push(this.locationJson.LocationLevelFour[index].Name);
    }
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
