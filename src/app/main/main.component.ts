import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,RouterModule } from '@angular/router';
import { NavigationEnd } from '@angular/router';

import {Directive} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { GlobalDataService } from '../global.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  showStyle0: any;
  showStyle1: any;
  showStyle2: any;
  showStyle3: any;
  showStyle4: any;
  showStyle5: any;
  showStyle6: any;
  showStyle7: any;
  showStyle8: any;
  showStyle9: any;

  currentRoute: any;

  verification: any;

  constructor(private gd: GlobalDataService){

  }

  ngOnInit(){
    this.verification = this.activeButtons
    this.verification();
  }

  activeButtons(gd: GlobalDataService){
    this.currentRoute=this.gd.shareObj['global'].url
    //console.log(this.gd.shareObj['global'].url);

    this.showStyle0 = false;
    this.showStyle1 = true;

    this.showStyle2 = false;
    this.showStyle3 = true;

    this.showStyle4 = false;
    this.showStyle5 = true;

    this.showStyle6 = false;
    this.showStyle7 = true;

    this.showStyle8 = false;
    this.showStyle9 = true;

    if(this.currentRoute =="/main/(aside:control)"){
      this.showStyle0 = true;
      this.showStyle1 = false;
    }

    if (this.currentRoute =="/main/(aside:users)"){
      this.showStyle2 = true;
      this.showStyle3 = false;
    }

    if (this.currentRoute =="/main/(aside:locations)") {
      this.showStyle4 = true;
      this.showStyle5 = false;
    }

    if (this.currentRoute == "/main/(aside:access)") {
      this.showStyle6 = true;
      this.showStyle7 = false;
    }

    if (this.currentRoute == "/main/(aside:roles)") {
      this.showStyle8 = true;
      this.showStyle9 = false;
    }
  }
}

//    ng generate module home --routing true
//    ng generate component home
