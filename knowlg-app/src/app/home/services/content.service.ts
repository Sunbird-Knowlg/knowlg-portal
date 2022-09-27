import { Injectable } from '@angular/core';
import * as _ from 'lodash-es';
import {data} from './data';
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  playerConfig = {};
  constructor() { }
  getContenstList(mimeType) {
      return data[mimeType];
  }
getContex() {
  return data.CONTEXT;
}
getConfig() {
  return data.CONFIG;
}
getPlayersList() {
  return data.playersArray;
}

preparePlayerConfig(contentId, mimeType) {
  const contentMetadata =  _.filter(this.getContenstList(mimeType), { identifier: contentId})[0];
  const playerConfig = {
    metadata: contentMetadata,
    config: this.getConfig(),
    context: this.getContex()
  };
  this.playerConfig = null;
  this.playerConfig = playerConfig;
  return this.playerConfig;
}

}
