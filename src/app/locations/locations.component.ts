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
   public LocationLevelTwoActiveId:any;   public LocationLevelThreeActiveId:any;

   public viewLocationLevelTwo = false;
   public viewLocationLevelThree = false;
   public dataLocation: string;
   public dataLocationLevelTwo:string;
   public dataLocationLevelThree:string;
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
    "Locations": [
      [
        {
          id: "Location1",
          Name:"Zona Pradera"
        },
        {
          id: "Location2",
          Name:"Europlaza"
        }
      ],
      [
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
      [
        {
          idLevelTwo: "LevelTwo1",
          idLevelThee: "LevelThree1",
          Name:"Oficina 510"
        },
        {
          idLevelTwo: "LevelTwo1",
          idLevelThee: "LevelThree2",
          Name:"Oficina 511"
        },
        {
          idLevelTwo: "LevelTwo1",
          idLevelThee: "LevelThree3",
          Name:"Oficina 512"
        },
        {
          idLevelTwo: "LevelTwo2",
          idLevelThee: "LevelThree4",
          Name:"Oficina 513"
        },
        {
          idLevelTwo: "LevelTwo2",
          idLevelThee: "LevelThree5",
          Name:"Oficina 514"
        }
      ]
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
    console.log(value)
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
    console.log("asdfasdfasdfasdfasdfasdf")
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
    this.dataLocation = locationID;
  }

  selectLocationLevelTwo(index, locationID, LevelTwoId) {
    this.LocationLevelTwoActiveId = index;
    this.LocationLevelThreeActiveId = -1;
    this.viewLocationLevelThree = true;
    this.dataLocation = locationID;
    this.dataLocationLevelTwo = LevelTwoId;
  }

  selectLocationLevelThree(index, LevelThreeId){
    console.log(index + " " + LevelThreeId)
    this.LocationLevelThreeActiveId = index;
    this.dataLocationLevelThree = LevelThreeId;
  }

  addingNewLoc(inputVal){
     this.lengthLocArray = this.locationJson.Locations[0];
     console.log(this.lengthLocArray +"---" +inputVal +"------" +this.locationJson.Locations);


            this.locationJson.Locations.push(
            [{
              id: "Location90",
              Name:"Europlaza90"
            }]
     )
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