import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { HelperService } from '../helper/helper.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  defaultContentDataMap = {}
  constructor(
    private helperService: HelperService,
    private configService: ConfigService) {
    this.defaultContentDataMap["do_11348995249825382411"] = this.configService.playerConfig.PDF_PLAYER_METADATA;
    this.defaultContentDataMap["do_21312960731822489612047"] = this.configService.playerConfig.EPUB_PLAYER_METADATA;
    this.defaultContentDataMap["do_31309320735055872011111"] = this.configService.playerConfig.VIDEO_PLAYER_METADATA;
  }

  getContent(contentId: string, option: any = { params: {} }): Observable<any> {
    return this.helperService.getContent(contentId, option).pipe(
      catchError((err: any) => {
        console.log(`Error while fetching the content`, err);
        return of( {
            result: {
              content: this.defaultContentDataMap[contentId]
            }
        });
      })
    );
  }
}
