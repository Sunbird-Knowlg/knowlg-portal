import { Injectable } from '@angular/core';
import * as _ from 'lodash-es';
import {data} from './data';
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  playerConfig = {};
  constructor() { }
  getContenstList(playerType) {
    if (playerType === 'pdf') {
      return data.PDF_DATA;
    } else if (playerType === 'epub') {
      return data.EPUB_DATA;
    } else {
      return [];
    }
  }
getContex() {
  return data.PDF_CONTEXT;
}
getConfig() {
  return data.PDF_CONFIG;
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
