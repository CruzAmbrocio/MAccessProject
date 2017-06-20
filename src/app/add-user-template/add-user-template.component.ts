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

}
