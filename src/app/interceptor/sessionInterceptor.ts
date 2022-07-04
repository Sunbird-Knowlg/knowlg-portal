import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/user/localstorage.service';
import * as _ from 'lodash-es';
@Injectable({
  providedIn: 'root'
})
export class SessionInterceptor implements HttpInterceptor {
  localStorage: LocalStorageService;
  constructor() {
    this.localStorage = localStorage;
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userId = _.get(JSON.parse(localStorage.getItem('userData')), 'userId');
    if (userId) {
      return next.handle(req.clone({
        headers: req.headers.set('x-user-id', userId),
      }));
    } else {
      return next.handle(req.clone({}));
    }
  }
}
