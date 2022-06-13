import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { delay, first, mergeMap, tap } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper/helper.service';
import { ConfigService } from 'src/app/services/config/config.service';
@Component({
  selector: 'app-epub',
  templateUrl: './epub.component.html',
  styleUrls: ['./epub.component.scss']
})
export class EpubComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private helperService: HelperService,
    private configService: ConfigService
  ) { }
  public queryParams: any;
  public contentDetails: any;
  playerConfig: any;
  isLoading = true;
  context =  this.configService.playerConfig.PLAYER_CONTEXT;
  epubMetaDataconfig: any = JSON.parse(localStorage.getItem('epubConfig')) || {};
  config: any;
  sidemenuConfig: any;
  @Output() ShowsharePopup = new EventEmitter();

  ngOnInit(): void {
    this.queryParams = this.activatedRoute.snapshot.queryParams;
    this.setConfig();
    this.getContentDetails().pipe(first(),
      tap((data: any) => {
        if (this.contentDetails){
          this.loadContent();
        }else{
          this.loadDefaultData();
        }
      }))
      .subscribe((data) => {
        this.isLoading = false;
      },
        (error) => {
          this.isLoading = false;
          alert('Error to load epub, Loading default epub');
          this.loadDefaultData();
          console.log('error --->', error);
        }
      );
  }

  setConfig(){
    this.config = {
      ...{
        traceId: 'afhjgh',
        sideMenu: {
          showShare: this.config?.sideMenu?.showShare || true,
          showDownload: this.config?.sideMenu?.showDownload || true,
          showReplay: this.config?.sideMenu?.showReplay || true,
          showExit: this.config?.sideMenu?.showExit || true,
          showPrint: this.config?.sideMenu?.showPrint || true,
        }
      }, ...this.epubMetaDataconfig
    };
    this.sidemenuConfig = this.config.sideMenu || false;
  }

  loadDefaultData(){
    this.playerConfig = {
      context: this.context,
      config: this.config,
      metadata: this.configService.playerConfig.EPUB_PLAYER_METADATA
    } ;
  }

  private getContentDetails() {
    if (this.queryParams.identifier) {
      const options: any = { params: { fields: 'mimeType,name,artifactUrl' } };
      return this.helperService.getContent(this.queryParams.identifier, options).
        pipe(mergeMap((data) => {
          if (data){
            this.contentDetails = data.result.content;
          }
          return of(data);
        }));
    } else {
      return of({});
    }
  }

  loadContent() {
    this.playerConfig = {
      context: this.context,
      config: this.config,
      metadata: this.contentDetails
    };
  }

  playerEvents(event) {
    if (event.edata.type === 'SHARE') {
      this.ShowsharePopup.emit(event);
    }
  }

  playerTelemetryEvents(event) {

  }
}
