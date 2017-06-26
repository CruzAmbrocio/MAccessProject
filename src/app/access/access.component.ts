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

  public indexLocationView = [];

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
    console.log("asfasdf")
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
//------------------------------------------------------------------------------
 public registerAccessNew: any;
  public tableAccessAddData: any;
  public selectionAccessType: any;
  public createdAccess: any;
  public callFunctionAccess: any;
  public changeText:any;

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
    console.log("asfasdf")
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