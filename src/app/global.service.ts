import { Injectable } from '@angular/core';

interface ShareObj {
  [id: string]: any;
}

interface ShareReg {
  [id: string]: any;
}

@Injectable()
export class GlobalDataService {
  shareObj: ShareObj = {};
  shareReg: ShareReg = {};
}