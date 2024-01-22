import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoggedIn: boolean = false;

  constructor() {
    let useInfo = sessionStorage.getItem('setLog') || null;
    if (useInfo !== null) {
      this.setLoggedIn();
    }
  }

  setLoggedIn() {
    this.isLoggedIn = true;
  }

  getLogged() {
    //console.log("isLoggedIn : ", this.isLoggedIn)
    return this.isLoggedIn;
  }

}