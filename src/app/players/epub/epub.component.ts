import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { first, mergeMap, tap } from 'rxjs/operators';
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
  config: any;
  sidemenuConfig: any;
  @Input() showPlayerOnly = false; 
  @Output() share = new EventEmitter();

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
    this.config = this.configService.getConfigData('epubConfig');
    this.sidemenuConfig = this.config?.sideMenu;
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
      this.share.emit(event);
    }
  }

  playerTelemetryEvents(event) {

  }
}
