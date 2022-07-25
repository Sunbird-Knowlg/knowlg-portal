import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { HelperService } from '../helper/helper.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  defaultContentDataMap = {};
  private identifier$: Subject<string>;
  public contentChangeObservable: any;
  constructor(
    private helperService: HelperService,
    private configService: ConfigService,
    private activatedRoute: ActivatedRoute
    ) {
    this.defaultContentDataMap['do_11348995249825382411'] = this.configService.playerConfig.PDF_PLAYER_METADATA;
    this.defaultContentDataMap['do_21312960731822489612047'] = this.configService.playerConfig.EPUB_PLAYER_METADATA;
    this.defaultContentDataMap['do_31309320735055872011111'] = this.configService.playerConfig.VIDEO_PLAYER_METADATA;
    this.identifier$ = new Subject<string>();
    this.contentChangeObservable = this.identifier$.asObservable();
    this.activatedRoute.paramMap.subscribe(params => {
      this.identifier$.next(params.get('identifier'));
    });
  }

  getContent(contentId: string, option: any = { params: {} }): Observable<any> {
    const identifier = this.activatedRoute.snapshot.queryParams?.identifier || contentId;
    return this.helperService.getContent(identifier, option).pipe(
      catchError((err: any) => {
        console.log(`Error while fetching the content`, err);
        return of( {
            result: {
              content: this.defaultContentDataMap[identifier]
            }
        });
      })
    );
  }



}
