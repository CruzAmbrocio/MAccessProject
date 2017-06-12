import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubication-edit',
  templateUrl: './ubication-edit.component.html',
  styleUrls: ['./ubication-edit.component.css']
})
export class UbicationEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 on() {
    document.getElementById("overlay").style.display = "block";
}

 off() {
    document.getElementById("overlay").style.display = "none";
}
}
