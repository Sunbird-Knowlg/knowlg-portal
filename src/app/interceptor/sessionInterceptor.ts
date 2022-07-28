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
  /*
    The URL which gives cors issues specific for blob path direct access those URLs
    we need to add here @skipInterceptor. As of now, URLs added only for dev env.
    but we can add the URLs for staging, prod env also. Basically @skipInterceptor
    URLs does not set any additional headers by interceptor and skip them.
  */
  public skipInterceptor: string[] = ['https://sunbirdstagingpublic.blob.core.windows.net'];
  constructor() {
    this.localStorage = localStorage;
  }
  intercept(req: any, next: HttpHandler): Observable<HttpEvent<any>> {
    const found = this.skipInterceptor.find(url => req.url.includes(url)); // Skip interceptor
    if (found) { return next.handle(req); }

    const userId = _.get(JSON.parse(localStorage.getItem('userData')), 'userId');
    if (userId) {
      return next.handle(req.clone({
        headers: req.headers.set('user-id', userId),
      }));
    }
    return next.handle(req);
  }
}
