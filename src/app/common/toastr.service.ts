import { InjectionToken } from '@angular/core';
export let TOKEN_TOASTR = new InjectionToken<Toastr>('toastr');
export interface Toastr {
  success (msg: string, title?: string): void;
  success (msg: string, title?: string): void;
  success (msg: string, title?: string): void;
  success (msg: string, title?: string): void;
}

// import { Injectable } from '@angular/core';

// declare let toastr ;
// @Injectable({
//   providedIn: 'root'
// })
// export class ToastrService {

//   constructor() { }

//   getToasterObj(){
//     return toastr;
//   }
// }
