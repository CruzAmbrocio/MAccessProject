import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { GlobalDataService } from './global.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(router: Router, private gd: GlobalDataService) { 
    router.events.subscribe(
      (url:any) => {
        this.gd.shareObj['global']=url;
        //console.log(this.gd.shareObj['global'].url);
      }
    );
  }
}
//ng generate module home --routing true
//ng generate component home