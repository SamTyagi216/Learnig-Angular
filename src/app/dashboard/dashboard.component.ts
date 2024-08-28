import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  response: any;

  constructor(private rotuer: Router, private location: Location) {

  }

  goBack(): void {
    this.location.back(); // This will navigate to the previous page
  }
}
