import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicDataService {
  public baseUrl = '/api/';
  public http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  post(request) {
    return this.http.post(this.baseUrl + request.url, request.data);
  }
  get(request) {
    return this.http.get(this.baseUrl + request);
  }
}
