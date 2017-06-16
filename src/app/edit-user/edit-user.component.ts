import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

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
  on() {
    document.getElementById("overlay").style.display = "block";
}

 off() {
    document.getElementById("overlay").style.display = "none";
}
}
