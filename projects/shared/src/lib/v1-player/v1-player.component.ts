import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'lib-v1-player',
  templateUrl: './v1-player.component.html',
  styleUrls: ['./v1-player.component.scss']
})
export class V1PlayerComponent {
  @Input() playerConfig;
  @Output() playerEvent = new EventEmitter<any>();

  constructor() { }

  @ViewChild('preview', { static: false }) previewElement: ElementRef;

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    const src = this.previewElement.nativeElement.src;
    this.previewElement.nativeElement.src = '';
    this.previewElement.nativeElement.src = src;
    this.previewElement.nativeElement.onload = () => {
      setTimeout(() => {
        this.previewElement.nativeElement.contentWindow.initializePreview(this.playerConfig);
        this.previewElement.nativeElement.contentWindow.addEventListener('message', resp => {
          if (resp.data === 'renderer:question:submitscore') {
            alert('Score has been submited succesfully');
          } else if (resp.data && typeof resp.data === 'object') {
            if (resp.data['player.pdf-renderer.error']) {
              const pdfError = resp.data['player.pdf-renderer.error'];
              if (pdfError.name === 'MissingPDFException') {
                alert('This Pdf has some issue, please try with the differnet pdf content');
              }
            } else if (resp.data && resp.data.event === 'renderer:maxLimitExceeded') {
              alert('Max limit reached to attempt the quiz');
            }
          }
        });
      }, 100);
    };
  }

  playerEventHandler(event) {
    this.playerEvent.emit(event);
  }

  telemetryEvent(event) {
    this.playerEvent.emit(event);
  }

}
