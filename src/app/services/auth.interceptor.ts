import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CommonService } from './common.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private commonServices: CommonService,
    private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = sessionStorage.getItem("AUTH_TOKEN");
   // console.log("taken : ", token)
    let skipUrls: any = skipUrlList();
    if (!skipUrls.includes(request.url)) {
      request = request.clone({
        setHeaders: { 'Authorization': `Bearer ${token}` }
      })
    }
    return next.handle(request);
  }
}

function skipUrlList() {
  return [
    "https://www.uratpguor.org/api/v1/users/loginUser"
  ]
}