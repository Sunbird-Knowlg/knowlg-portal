import { Injectable } from '@angular/core';
import * as _ from 'lodash-es';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CollectionHierarchyAPI } from '../../players/interfaces/content.service';
import { ServerResponse } from '../../players/interfaces/serverResponse';
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

  public sortChildrenWithIndex(tree) {
    if (!_.get(tree, 'children.length')) {
      return tree;
    }
    tree.children = _.sortBy(tree.children.map(childNode => this.sortChildrenWithIndex(childNode)), ['index']);
    return tree;
  }

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

  public getCollectionHierarchy(identifier: string, option: any = { params: {} }): Observable<CollectionHierarchyAPI.Get> {
    const req = {
      url: `${this.configService.urlConFig.COLLECTION.HIERARCHY}/${identifier}`,
      param: option.params
    };
    return this.actionService.get(req).pipe(map((response: ServerResponse) => {
      if (response.result.content) {
        response.result.content = this.sortChildrenWithIndex(response.result.content);
      }
      return response;
    }));
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

  publishContent(reqBody: any, contentId: string): Observable<any> {
    const req = {
      url: `${this.configService.urlConFig.CONTENT.PUBLISH}/${contentId}`,
      data: {
        request: reqBody
    }
    };
    return this.actionService.post(req);
  }

  contentSearch(requestData: object): Observable<any> {
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
  getAllRoleTypes(): Observable<any> {
      const req = {
        url: this.configService.urlConFig.USER.USER_ROLE,
      };
      return this.actionService.get(req).pipe(
        map((response: any) => {
          return response;
        })
      );
  }
  getAllUsersByRoleType(role): Observable<any> {
    const req = {
      url: `${this.configService.urlConFig.USER.READ}`,
      data: {
          roleType: role
      }
    };
    return this.actionService.post(req).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getFormData(formInputParams): Observable<any> {
    const channelOptions = {
      url: this.configService.urlConFig.dataDrivenForms.READ,
      data: {
        request: {
          type: formInputParams.formType,
          action: formInputParams.formAction,
          subType: formInputParams.subType
        }
      }
    };
    return this.actionService.post(channelOptions).pipe(map((data) => {
      return data;
    }));
  }

  setConfig(config) {
    this.editorConfig = config;
  }
  getConfig() {
    return this.editorConfig;
  }
}
