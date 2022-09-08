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
    if (mimeType === 'pdf') {
      return data.PDF;
    } else if (mimeType === 'epub') {
      return data.EPUB;
    } else if (mimeType === 'video'){
      return data.VIDEO;
    }
  }
getContex() {
  return data.PDF_CONTEXT;
}
getConfig() {
  return data.PDF_CONFIG;
}
getPlayersList() {
  return data.playersArray;
}

preparePlayerConfig(contentId, playerTypeSelected) {
  const contentMetadata =  _.filter(this.getContenstList(playerTypeSelected), { identifier: contentId})[0];
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
