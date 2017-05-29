import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent  implements OnInit {
  showStyle0 :any;
  showStyle1 :any;
  showStyle2 :any;
  showStyle3 :any;
  showStyle4 :any;
  showStyle5 :any;
  showStyle6 :any;
  showStyle7 :any;
  showStyle8 :any;
  showStyle9 :any;
  constructor() { 
  }

  ngOnInit() {
    this.showStyle0 = true;
    this.showStyle1 = false;

    this.showStyle2 = false;
    this.showStyle3 = true;

    this.showStyle4 = false;
    this.showStyle5 = true;

    this.showStyle6 = false;
    this.showStyle7 = true;

    this.showStyle8 = false;
    this.showStyle9 = true;
  }
  changingActiveBtns(control:boolean, user:boolean, loc:boolean, Accs:boolean, rol:boolean){
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

    if(control){
    this.showStyle0 = true;
    this.showStyle1 = false;
    }

    if (user){
    this.showStyle2 = true;
    this.showStyle3 = false;
    }

    if (loc) {
    this.showStyle4 = true;
    this.showStyle5 = false;
    }

    if (Accs) {
    this.showStyle6 = true;
    this.showStyle7 = false;
    }

    if (rol) {
    this.showStyle8 = true;
    this.showStyle9 = false;
    }
  }
}



//    ng generate module home --routing true
//    ng generate component home
