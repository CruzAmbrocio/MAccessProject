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
  styleUrls: ['../add-loc-template/add-loc-template.component.css'],
  templateUrl: '../add-loc-template/add-loc-template.component.html'
})

export class AddModalLoc implements CloseGuard, ModalComponent<CustomModalContext>, OnInit {
  context: CustomModalContext;

   wrongAnswer: boolean;
   shouldUseMyClass: boolean;

   public regNewLoc: any;
   public regNewLocTable: any;
   public regNewLocCoord: any;
   public NewLocCreated: any;
   public callFunctionAdd: any;
   public appearAllContent: any;
   public appearCheckIcon: any;

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

   isActive: any;
   isDisabled: any;
   isActive1: any;
   isDisabled1: any;
   isActive2: any;
   isDisabled2: any;
   changeIndicator: any;
   BackAddLoc: any;
   BackAddLoc2: any;
   dotsIndicators: any;

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
        Name:"Nivel 1"
      },
      {
        idLevelTwo: "LevelTwo1",
        idLevelThree: "LevelThree2",
        Name:"Nivel 2"
      },
      {
        idLevelTwo: "LevelTwo1",
        idLevelThree: "LevelThree3",
        Name:"Nivel 3"
      },
      {
        idLevelTwo: "LevelTwo2",
        idLevelThree: "LevelThree4",
        Name:"Nivel 4"
      },
      {
        idLevelTwo: "LevelTwo2",
        idLevelThree: "LevelThree5",
        Name:"Nivel 5"
      }
    ],

    "LocationLevelFour" : [
      {
        idLevelThree: "LevelThree1",
        idLevelFour: "LevelFour1",
        Name:"Oficina 110"
      },
      {
        idLevelThree: "LevelThree1",
        idLevelFour: "LevelFour2",
        Name:"Oficina 111"
      },
      {
        idLevelThree: "LevelThree1",
        idLevelFour: "LevelFour3",
        Name:"Oficina 112"
      },
      {
        idLevelThree: "LevelThree1",
        idLevelFour: "LevelFour4",
        Name:"Oficina 113"
      },
      {
        idLevelThree: "LevelThree1",
        idLevelFour: "LevelFour5",
        Name:"Oficina 114"
      }
    ]
  };



  constructor(public modal: Modal, private compiler: Compiler, private injector: Injector, public dialog: DialogRef<CustomModalContext>) {

    this.context = dialog.context;
    this.wrongAnswer = true;
    dialog.setCloseGuard(this);

    this.changeIndicator = this.changeIndicatiors
    this.changeIndicator(true, false, false);
  }
  ngOnInit() {
    this.callFunctionAdd = this.changeStepsAddLoc;
    this.callFunctionAdd(true, false, false, false, false);
  }
  closeEditLoc(value) {
    this.wrongAnswer = value != 5;
    this.dialog.close();
  }

  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.wrongAnswer;
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
  appearInputAddNewLoc(){
    this.appearAllContent= true;
    this.appearCheckIcon=false;
  }
  onKeyUpShow(value){
    if(value == ''){
      this.appearCheckIcon= false
    }else{
      this.appearCheckIcon= true
    }
  }
  changeStepsAddLoc(param1, param2, param3, param4) {
    this.regNewLoc = param1;
    this.regNewLocTable = param2;
    this.regNewLocCoord = param3;
    this.NewLocCreated = param4;
  }
  deleteWarningAddLoc() {
    swal({
      html: `
            <div class="cirleImgDel">  
              <img class="imgDelete" src="../assets/iconos/icon_eliminar.png">
            </div>
            <p class="textGrayBold">¿Eliminar Ubicacion Definitivamente?</p>
            <p class="textGrayReg">La ubicacion se eliminará permanentemente.</p>`,
      showCancelButton: true,
      confirmButtonClass: "btnDelete",
      cancelButtonClass: "btnCancel",
      confirmButtonText:
      'Eliminar',
      cancelButtonText:
      'Cancelar'
    })
  }

  selectParentLocation(index, locationID) {
    this.LocationActiveId = index;
    this.LocationLevelTwoActiveId = -1;
    this.LocationLevelThreeActiveId = -1;
    this.viewLocationLevelTwo = true;
    this.viewLocationLevelThree = false;
    this.viewLocationLevelFour = false;
    this.dataLocation = locationID;
  }

  selectLocationLevelTwo(index, locationID, LevelTwoId) {
    this.LocationLevelTwoActiveId = index;
    this.LocationLevelThreeActiveId = -1;
    this.viewLocationLevelThree = true;
    this.viewLocationLevelFour = false;
    this.dataLocation = locationID;
    this.dataLocationLevelTwo = LevelTwoId;
  }

  selectLocationLevelThree(index, LevelThreeId){
    this.LocationLevelThreeActiveId = index;
    this.dataLocationLevelThree = LevelThreeId;
    this.viewLocationLevelFour = true;
  }

  selectLocationLevelFour(index, LevelFourId){
    this.LocationLevelFourActiveId = index;
  }


  addingNewLoc(btnID,inputVal){
    var objectLength;
    var newId;
    if (btnID == "ParentLocation") {
      objectLength = this.locationJson.ParentLocation.length;
      newId = "Location" + objectLength;
      this.locationJson.ParentLocation.push({"id":"Location3","Name":inputVal});
    } else if (btnID == "LocationLevelTwo") {
      objectLength = this.locationJson.LocationLevelTwo.length;
      newId = "Location" + objectLength;
      this.locationJson.LocationLevelTwo.push({"id":this.locationJson.ParentLocation[this.LocationActiveId].id,"idLevelTwo":newId,"Name":inputVal});
    } else if (btnID == "LocationLevelThree") {
      objectLength = this.locationJson.LocationLevelThree.length;
      newId = "Location" + objectLength;
      this.locationJson.LocationLevelThree.push({"idLevelTwo":this.locationJson.LocationLevelTwo[this.LocationLevelTwoActiveId].idLevelTwo,"idLevelThree":newId,"Name":inputVal});
    } else if (btnID == "LocationLevelFour") {
      objectLength = this.locationJson.LocationLevelFour.length;
      newId = "Location" + objectLength;
      this.locationJson.LocationLevelFour.push({"idLevelThree":this.locationJson.LocationLevelThree[this.LocationLevelThreeActiveId].idLevelThree,"idLevelFour":newId,"Name":inputVal});
    }
  }
}
//------------------------------------------------------------------------------
declare var swal: any;
@Component({
  selector: 'modal-content',
  styleUrls: ['../edit-loc-template/edit-loc-template.component.css'],
  templateUrl: '../edit-loc-template/edit-loc-template.component.html'
})

export class EditModalLoc implements CloseGuard, ModalComponent<CustomModalContext>, OnInit {
  context: CustomModalContext;

   wrongAnswer: boolean;
   shouldUseMyClass: boolean;

   public callFunctionAddLoc: any;
   public enterlocation: any;
   public selectLocation: any;

   isActive: any;
   isDisabled: any;
   isActive1: any;
   isDisabled1: any;
   changeIndicator: any;
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
    this.callFunctionAddLoc = this.changeStepsEditLoc;
    this.callFunctionAddLoc(true, false);
  }
  closeEditLoc(value) {
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
    swal({
      html: `
            <div class="cirleImgDel">  
              <img class="imgDelete" src="../assets/iconos/icon_eliminar.png">
            </div>
            <p class="textGrayBold">¿Eliminar Ubicacion Definitivamente?</p>
            <p class="textGrayReg">La ubicacion se eliminará permanentemente.</p>`,
      showCancelButton: true,
      confirmButtonClass: "btnDelete",
      cancelButtonClass: "btnCancel",
      confirmButtonText:
      'Eliminar',
      cancelButtonText:
      'Cancelar'
    })
  }

  changeStepsEditLoc(param1, param2) {
    this.enterlocation = param1;
    this.selectLocation = param2;
  }

  changeIndicatiors(statOne, statTwo, statThree) {
    if (statOne) {
      this.isActive = true;
      this.isDisabled = false;
      this.isActive1 = false;
      this.isDisabled1 = true;
      this.dotsIndicators = true;
    } else if (statTwo) {
      this.isActive = false;
      this.isDisabled = true;
      this.isActive1 = true;
      this.isDisabled1 = false;
      this.BackUser = false;
      this.dotsIndicators = true;
    } else if (statThree) {
      this.BackUser = false;
      this.dotsIndicators = false;
    }
  }
}
//------------------------------------------------------------------------------
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  @Input()  name;
  constructor(public modal: Modal) { }

  ngOnInit() {
  }
  openEditUser() {
    this.modal.open(EditModalLoc, overlayConfigFactory({ num1: 2, num2: 3 }));
  }
  openAddLoc() {
    this.modal.open(AddModalLoc, overlayConfigFactory({ num1: 2, num2: 3 }));
  }
}
//------------------------------------------------------------------------------
