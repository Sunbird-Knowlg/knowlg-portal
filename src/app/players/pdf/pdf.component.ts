import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  playerConfig = this.configService.playerConfig.PDF_PLAYER;
  isLoading = true;

  ngOnInit(): void {
    this.queryParams = this.activatedRoute.snapshot.queryParams;
    this.getContentDetails().pipe(first(),
      tap((data: any) => {
        if (this.contentDetails){
          this.loadContent(this.contentDetails);
        }
      }))
      .subscribe((data) => {
        this.isLoading = false;
      },
        (error) => {
          this.isLoading = false;
          alert('Error to load pdf, Loading default pdf');
          console.log('error --->', error);
        }
      );
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

  loadContent(metadata) {
    const config = this.playerConfig;
    this.playerConfig = undefined;
    this.isLoading = true;
    setTimeout(() => {
      this.playerConfig = {...config, metadata};
      this.isLoading = false;
    }, 3000);
  }

  playerEvents(event) {

  }
  playerTelemetryEvents(event) {

  }

}
