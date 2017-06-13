import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-rol',
  templateUrl: './edit-rol.component.html',
  styleUrls: ['./edit-rol.component.css']
})
export class EditRolComponent implements OnInit {

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
