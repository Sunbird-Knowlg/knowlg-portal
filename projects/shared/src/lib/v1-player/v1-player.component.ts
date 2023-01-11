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
          this.playerEvent.emit(resp);
        });
      }, 100);
    };
  }
}
