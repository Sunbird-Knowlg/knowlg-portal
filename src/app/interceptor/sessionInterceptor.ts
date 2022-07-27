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
  public skipHeaders: string[] = ['https://sunbirdstagingpublic.blob.core.windows.net'];
  constructor() {
    this.localStorage = localStorage;
  }
  intercept(req: any, next: HttpHandler): Observable<HttpEvent<any>> {
    const found = this.skipHeaders.find(url => req.url.includes(url)); // Skip headers
    if (found) { return next.handle(req); }

    const userId = _.get(JSON.parse(localStorage.getItem('userData')), 'userId');
    if (userId) {
      return next.handle(req.clone({
        headers: req.headers.set('x-user-id', userId),
      }));
    }
    return next.handle(req);
  }
}
