import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  isSidebar:boolean=false;
  constructor(private commonServices: CommonService){
    this.commonServices.sidebar_collapse.subscribe((res:any)=> this.isSidebar =  res);
  }

  toggleSidemenu() {
    this.commonServices.sidebar_collapse.next(!this.isSidebar);
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
  }

}
