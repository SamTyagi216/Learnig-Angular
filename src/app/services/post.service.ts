import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminApis } from './shared/core/adminApis';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  loginUser(postData: any) {
    return this.http.post(adminApis.loginUrl, postData);
  }
  
  // #################### Dashboard ####################################
  // dashboard(postData: any) {
  //   return this.http.post(adminApis.dashboardURL, postData);
  // }

  // #################### Counsel ####################################
  addCounsel(postData: any) {
    return this.http.post(adminApis.addCounselURL, postData);
  }

  manageCounsel(postData: any) {
    return this.http.post(adminApis.manageCounselURL, postData);
  }

}