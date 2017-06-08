import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,RouterModule } from '@angular/router';
import { NavigationEnd } from '@angular/router';

import {Directive} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

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

}



//    ng generate module home --routing true
//    ng generate component home
