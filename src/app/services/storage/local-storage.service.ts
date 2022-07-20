import { Injectable } from '@angular/core';
import { Storage } from './storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements Storage{

  read(key: string) {
    return localStorage.getItem(key);
  }
  write(key: string, value: any): void {
    
    return localStorage.setItem(key, value);
  }
  delete(key: string) {
    return localStorage.removeItem(key);
  }
  
}
