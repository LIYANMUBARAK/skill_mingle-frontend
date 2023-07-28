import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  authToken!:string|null

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAdminRequest = request.url.includes("admin");
    const isUserRequest = request.url.includes("user");
    if (isAdminRequest) {
      this.authToken = localStorage.getItem('adminToken')
    
    } else if(isUserRequest){
      this.authToken = localStorage.getItem('userToken')
    }
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authToken}`,
      },
    });
    
    return next.handle(authRequest);
  }
}
