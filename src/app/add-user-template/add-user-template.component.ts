import { Component, OnInit, Input, NgZone } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';


@Component({
  selector: 'app-add-user-template',
  templateUrl: './add-user-template.component.html',
  styleUrls: ['./add-user-template.component.css']
})

export class AddUserTemplateComponent implements OnInit {
  @Input() name;
  constructor() {

  }

  ngOnInit() {
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
    console.log(val)
  }
}
