import {Component, NgModule ,OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor() { }

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
