import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Config {
  readURL: string;
  searchURL: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private config: Config;
  private defalutConfig = { readURL: "/action/content/v3/read", searchURL: "/action/composite/v3/search" };
  constructor(private http: HttpClient) {
    this.config = this.defalutConfig;
   }

  initialize(config: Config = this.defalutConfig) {
    this.config = config;
  }

  read(contentId: string, option: any = { params: {} }): Observable<any> {
    return this.http.get(`${this.config.readURL}/${contentId}`, option);
  }

  search(body: any, params?: HttpParams, headers?: HttpHeaders) {
    return this.http.post(this.config.searchURL, body, { params, headers });
  }

}

