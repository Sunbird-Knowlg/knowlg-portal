import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { delay, first, mergeMap, tap } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper/helper.service';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-interactive-player',
  templateUrl: './interactive-player.component.html',
  styleUrls: ['./interactive-player.component.scss']
})
export class InteractivePlayerComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private helperService: HelperService,
    private configService: ConfigService
  ) { }
  value: any;
  public queryParams: any;
  public contentDetails: any;
  playerConfig = this.configService.playerConfig.INTERACTIVE_PLAYER;

  @ViewChild('preview', { static: false }) previewElement: ElementRef;
  ngOnInit(): void {
    this.queryParams = this.activatedRoute.snapshot.queryParams;
    this.getContentDetails().pipe(first(),
      tap((data: any) => {
        if (this.contentDetails){
          this.playerConfig.metadata = this.contentDetails;
          this.playerConfig.data = this.contentDetails.body;
        }
        const playerInterval = setInterval(() => {
          if (this.previewElement?.nativeElement) {
            clearInterval(playerInterval);
            // This is to reload a iframe as iframes reload method not working on cross-origin.
            const src = this.previewElement.nativeElement.src;
            this.previewElement.nativeElement.src = '';
            this.previewElement.nativeElement.src = src;
            this.previewElement.nativeElement.onload = () => {
              setTimeout(() => {
                this.previewElement.nativeElement.contentWindow.initializePreview(this.playerConfig);
                this.previewElement.nativeElement.contentWindow.addEventListener('message', resp => {
                  if (resp.data === 'renderer:question:submitscore') {
                    // todo submitscore
                  } else if (resp.data === 'renderer:question:reviewAssessment') {
                    // todo reviewAssement
                  } else if (resp.data && typeof resp.data === 'object') {
                    if (resp.data['player.pdf-renderer.error']) {
                      const pdfError = resp.data['player.pdf-renderer.error'];
                      if (pdfError.name === 'MissingPDFException') {
                      }
                    } else if (resp.data && resp.data.event === 'renderer:contentNotComaptible'
                      || resp.data && resp.data.data.event === 'renderer:contentNotComaptible') {
                      // todo for compatiblity check
                    } else if (resp.data && resp.data.event === 'renderer:maxLimitExceeded') {
                      // todo maxlimit reached
                    }
                  } else if (this.isJSON(resp.data)) {
                    const response = JSON.parse(resp.data);
                    if (response.event === 'renderer:navigate') {
                     // todo navigation events
                    }
                  }
                });
              }, 1000);
            };
          }
      }, 500);
      }),
      delay(10))
      .subscribe((data) => {
        // todo for loader
      },
        (error) => {
          // todo to show tostmessage
          console.log('error --->', error);
        }
      );
  }

  private getContentDetails() {
    if (this.queryParams.identifier) {
      const options: any = { params: { fields: 'body,mimeType,name' } };
      return this.helperService.getContent(this.queryParams.identifier, options).
        pipe(mergeMap((data) => {
          this.contentDetails = data.result.content;
          return of(data);
        }));
    } else {
      return of({});
    }
  }

  playerEvents(event) {

  }
  playerTelemetryEvents(event) {

  }

  onEnter(value) {
    this.value = JSON.parse(value);
    this.playerConfig.data = this.value.result.content.body;
    this.playerConfig.metadata = this.value.result.content;
    this.previewElement.nativeElement.contentWindow.location.reload();
    setTimeout(() => {
      this.previewElement.nativeElement.contentWindow.initializePreview(this.playerConfig);
    }, 2000);
  }

  private isJSON(input): boolean {
    try {
      JSON.parse(input);
      return true;
    } catch (e) {
      return false;
    }
  }
}
