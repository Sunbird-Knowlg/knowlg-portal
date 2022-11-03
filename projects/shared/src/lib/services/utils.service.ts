import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  getInitial(name: string) {
    return (name ? name.charAt(0).toUpperCase() : '')
  }

  getColors() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    return { "color": "rgb(" + x + "," + y + "," + z + ")", backgroundColor: "rgba(" + x + "," + y + "," + z + ", 0.2)" }
  }
}
