import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  activemenu: number = 0;

  domCreated: boolean = false;

  constructor(private rotuer: Router, private location: Location) {

  }

  goBack(): void {
    this.location.back();
  }

  setActive(index: number) {
    if (this.activemenu == index) this.activemenu = 0;
    else this.activemenu = index;
  }
}
