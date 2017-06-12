import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,RouterModule } from '@angular/router';
import { NavigationEnd } from '@angular/router';

import {Directive} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { GlobalDataService } from '../global.service';


@Component({
  selector: 'app-header-add-users',
  templateUrl: './header-add-users.component.html',
  styleUrls: ['./header-add-users.component.css']
})
export class HeaderAddUsersComponent implements OnInit {
  isActive: any;
  isDisabled: any;
  isActive1: any;
  isDisabled1: any;
  currentRoute: any;
  changeIndicator:any;
  changeIndicatorInit:any;
  constructor( private router: Router, private gd: GlobalDataService){
    router.events.subscribe(
      (url:any) => {
        this.gd.shareReg['global']=url;
        this.changeIndicator = this.changeIndicatiors
        this.changeIndicator();
      }
    );
  }

  ngOnInit() {
    this.isActive = true;
    this.isDisabled = false;
    this.isActive1 = false;
    this.isDisabled1 = true;
  }

  changeIndicatiors(gd: GlobalDataService){
    this.currentRoute=this.gd.shareReg['global'].url
    if(this.currentRoute =="/addUsers/(editUserOutlet:photoUser)"){
      this.isActive = true;
      this.isDisabled = false;
      this.isActive1 = false;
      this.isDisabled1 = true;
    }
    if(this.currentRoute =="/addUsers/(editUserOutlet:createUser)"){
      this.isActive = false;
      this.isDisabled = true;
      this.isActive1 = true;
      this.isDisabled1 = false;
    }
  }
}
