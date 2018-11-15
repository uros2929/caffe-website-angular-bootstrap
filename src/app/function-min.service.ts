import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionMinService {

  constructor() { }

  setToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
   }
   getFromLocalStorage(key) {
     return localStorage.getItem(key) !== null ? JSON.parse(localStorage.getItem(key)) : {};
 }
}
