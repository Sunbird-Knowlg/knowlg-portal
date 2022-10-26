import { Injectable } from '@angular/core';
import * as _ from 'lodash-es';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { data } from './data';
import { ContentService as APIService } from 'shared';
import { environment } from 'src/environments/environment';
import { get } from 'lodash-es';
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  playerConfig = {};
  constructor(private apiService: APIService) { 
    this.apiService.initialize({
      readURL: environment.contentReadURL,
      searchURL: environment.compositeSearchURL
    })
  }

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

  getContent(contentId, mimeType) {
    const contentMetadata = _.filter(this.getContenstList(mimeType), { identifier: contentId })[0];
    if (contentMetadata) {
      return of(
        {
          "result": {
            "content": contentMetadata
          }
        });
    } else {
      return this.apiService.read(contentId)
    }
  }

  preparePlayerConfig(contentMetadata) {
    
    const playerConfig = {
      metadata: get(contentMetadata, 'result.content'),
      config: this.getConfig(),
      context: this.getContex()
    };
    this.playerConfig = null;
    this.playerConfig = playerConfig;
    return of(this.playerConfig);
    
  }

}
