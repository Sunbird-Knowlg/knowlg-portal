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

  private baseUrl: string;
  private defalutConfig = { readURL: "/action/content/v3/read", searchURL: "/action/composite/v3/search" };
  constructor(private http: HttpClient) {}

  initialize(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  read(contentId: string, option: any = { params: {} }): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.defalutConfig.readURL}/${contentId}`, option);
  }

  search(body: any, params?: HttpParams, headers?: HttpHeaders) {
    return this.http.post(`${this.baseUrl}${this.defalutConfig.searchURL}`, body, { params, headers });
  }

}

