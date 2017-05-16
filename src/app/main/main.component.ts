import { Component,  OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

constructor(private _router: Router) {}

ngOnInit() {
  this._router.events.subscribe((event: NavigationEnd) => {
    if(event instanceof NavigationEnd) {
      window.scrollTo(0, 0);
    }
  })
}

}



/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

*/
//    ng generate module home --routing true
//    ng generate component home