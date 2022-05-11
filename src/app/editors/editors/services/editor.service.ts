import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicDataService } from './public-data.service';
@Injectable({
  providedIn: 'root'
})
export class EditorService {
  public editorConfig: any;
  constructor(public publicDataService: PublicDataService) {
  }

  readContent(reqData): Observable<any> {
    const url = 'content/v1/read/' + reqData;
    return this.publicDataService.get(url);
  }
  getAllCollectionList(reqData): Observable<any> {
    const option = {
      url: 'composite/v1/search',
      data: reqData
    };
    return this.publicDataService.post(option);
  }
  getCategoryDefinition(objectType, name, channel?) {
    const option = {
      url: 'object/category/definition/v1/read?fields=objectMetadata,forms,name,label',
      data: {
        request: {
          objectCategoryDefinition: {
            objectType: objectType,
            name: name,
            ...(channel && { channel })
          }
        }
      }
    };
    return this.publicDataService.post(option);
  }
  setConfig(config) {
    this.editorConfig = config;
  }
  getConfig() {
    return this.editorConfig;
  }
}
