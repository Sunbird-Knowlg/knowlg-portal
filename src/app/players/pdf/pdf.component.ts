import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
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
  pdfMetaDataconfig: any = JSON.parse(localStorage.getItem('pdfConfig')) || {};
  config: any;
  isLoading = true;
  sidemenuConfig: any;
  @Output() ShowsharePopup = new EventEmitter();

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
      }, ...this.pdfMetaDataconfig
    };
    this.sidemenuConfig = this.config.sideMenu || false;
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
      context: this.configService.playerConfig.PLAYER_CONTEXT,
      config: this.config,
      metadata: this.contentDetails || this.configService.playerConfig.PDF_PLAYER_METADATA
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
