import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { first, mergeMap, tap } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper/helper.service';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private helperService: HelperService,
    private configService: ConfigService
  ) { }
  @ViewChild('preview', { static: false }) previewElement: ElementRef;
  public queryParams: any;
  public contentDetails: any;
  playerConfig: any;
  config: any;
  isLoading = true;
  sidemenuConfig: any;
  @Input() showPlayerOnly = false;
  @Output() share = new EventEmitter();

  ngOnInit(): void {
    this.queryParams = this.activatedRoute.snapshot.queryParams;
    this.setConfig();
    this.getContentDetails().pipe(first(),
      tap((data: any) => {
          this.loadContent();
      }))
      .subscribe((data) => {
        this.isLoading = false;
      },
        (error) => {
          this.isLoading = false;
          alert('Error to load pdf, Loading default pdf');
          this.loadContent();
          console.log('error --->', error);
        }
      );
  }

  setConfig(){
    this.config = this.configService.getConfigData('pdfConfig');
    this.sidemenuConfig = this.config?.sideMenu;
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
    const metaData = this.configService.getMetaData();
    // tslint:disable-next-line:forin
    for (const item in metaData) {
      this.config[item] = metaData[item];
    }

    this.playerConfig = {
      context: this.configService.playerConfig.PLAYER_CONTEXT,
      config: this.config,
      metadata: this.contentDetails || this.configService.playerConfig.PDF_PLAYER_METADATA
    };
  }

  playerEvents(event) {
    if (event.edata.type === 'SHARE') {
      this.share.emit(event);
    }
    if (event.edata.type === 'END') {
      this.configService.setMetaData(event);
    }
  }
  playerTelemetryEvents(event) {

  }

}
