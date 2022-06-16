import { Injectable } from '@angular/core';
import * as _ from 'lodash-es';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActionService } from '../action/action.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  public editorConfig: any;
  constructor(
    private configService: ConfigService,
    private actionService: ActionService
  ) { }

  getContent(contentId: string, option: any = { params: {} }): Observable<any> {
    // const param = { fields: this.configService.editorConfig.DEFAULT_PARAMS_FIELDS };
    const param = {};
    const req = {
      url: `${this.configService.urlConFig.CONTENT.READ}/${contentId}`,
      param: { ...param, ...option.params },
    };
    return this.actionService.get(req).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createContent(reqBody: any): Observable<any> {
    const req = {
      url: this.configService.urlConFig.CONTENT.CREATE,
      data: {
        request: reqBody
    }
    };
    return this.actionService.post(req);
  }

  getAllCollectionList(requestData: object): Observable<any> {
    const req = {
      url: `${this.configService.urlConFig.SEARCH.COMPOSIT}`,
      data: requestData
    };
    return this.actionService.post(req).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getChannel(channelId: string): Observable<any> {
    const req = {
      url: `${this.configService.urlConFig.CHANNEL.READ}/${channelId}`,
    };
    return this.actionService.get(req).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  getCategoryDefinition(objectType, name, channel): Observable<any> {
    const req = {
      url: `${this.configService.urlConFig.CATEGORYDEFINATION.READ}`,
      data: {
        request: {
          objectCategoryDefinition: {
            objectType,
            name,
            channel
          }
        }
      }
    };
    return this.actionService.post(req).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  setConfig(config) {
    this.editorConfig = config;
  }
  getConfig() {
    return this.editorConfig;
  }
}
