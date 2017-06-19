import { Component, OnInit, Input, NgZone } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class AdditionCalculateWindowData extends BSModalContext {
  constructor(public num1: number, public num2: number) {
    super();
  }
}

@Component({
  selector: 'modal-content',
  templateUrl: './add-user-template.component.html',
  styleUrls: ['./add-user-template.component.css']
})
export class AdditionCalculateWindow implements ModalComponent<AdditionCalculateWindowData> {
  context: AdditionCalculateWindowData;

  public wrongAnswer: boolean;

  constructor(public dialog: DialogRef<AdditionCalculateWindowData>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
    console.log(this.context)
  }

}

declare var swal: any;
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
