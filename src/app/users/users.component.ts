import { Component, OnInit } from '@angular/core';
declare var swal: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  deleteRow() {
    swal({
      html:`
            <div class="cirleImgDel">
              <img class="imgDelete" src="../assets/iconos/icon_eliminar.png">
            </div>
            <p class="textGrayBold">¿Eliminar Usuario Definitivamente?</p>
            <p class="textGrayReg">El usuario se eliminará permanentemente.</p>`,
      showCancelButton: true,
      confirmButtonClass:"btnDelete",
      cancelButtonClass:"btnCancel",
      confirmButtonText:
        'Eliminar',
      cancelButtonText:
        'Cancelar'
    })
  }
}
