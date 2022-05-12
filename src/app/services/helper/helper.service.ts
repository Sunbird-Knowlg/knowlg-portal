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
}
