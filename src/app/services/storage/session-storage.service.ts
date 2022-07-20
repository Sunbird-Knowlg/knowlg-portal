import { Injectable } from '@angular/core';
import { Storage } from './storage';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService implements Storage {

  read(key: string) {
    return sessionStorage.getItem(key);
  }

  write(key: string, value: string): void {
    return sessionStorage.setItem(key, value);
  }

  delete(key: string) {
    return sessionStorage.removeItem(key);
  }

}
