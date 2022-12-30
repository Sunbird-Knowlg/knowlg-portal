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
    this.apiService.initialize(environment.baseURL)
  }

  getContenstList(mimeType) {
    return data[mimeType];
  }

  getContext() {
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
          result: {
            content: contentMetadata
          }
        });
    } else {
      return this.apiService.read(contentId, { params: { fields: 'mimeType,name,artifactUrl,body,streamingUrl'} });
    }
  }

  preparePlayerConfig(contentMetadata) {

    const playerConfig = {
      metadata: get(contentMetadata, 'result.content'),
      config: this.getConfig(),
      context: this.getContext()
    };
    this.playerConfig = null;
    this.playerConfig = playerConfig;
    return of(this.playerConfig);

  }

  prepareV1PlayerConfig(contentMetadata) {
    const metadata = get(contentMetadata, 'result.content');
    const playerConfig = {
      metadata,
      config: this.getV1ConfigData(),
      context: this.getContext(),
      data: metadata.mimeType === 'application/vnd.ekstep.ecml-archive' ? metadata.body : {}
    };
    this.playerConfig = null;
    this.playerConfig = playerConfig;
    return of(this.playerConfig);
  }

  getV1ConfigData(){
    return data.V1CONFIG;
  }

  search(mimeType: string) {
    return this.apiService.search({
      request: {
        filters: {
          status: [
            'Live'
          ],
          mimeType,
          objectType: 'Content'
        },
        query: '',
        sort_by: {
          lastUpdatedOn: 'desc'
        }
      }
    });
  }

  getMimeType(playerType: string){
    const playerData = data.playersArray;
    const mimeType = _.filter(playerData, { playerType })[0].mimeType;
    return mimeType;
  }

  playerRedirectURL(playerType: string){
    const playerData = data.playersArray;
    const playerRedirectURL = _.filter(playerData, { playerType })[0].playerRedirectURL;
    return playerRedirectURL;
  }

}
