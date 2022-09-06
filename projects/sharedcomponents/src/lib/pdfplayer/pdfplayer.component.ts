import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-pdfplayer',
  templateUrl: './pdfplayer.component.html',
  styleUrls: ['./pdfplayer.component.css']
})
export class PdfplayerComponent implements OnInit {
@Input() playerConfig;
@Output() pdfPlayerEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  pdfEventHandler(event) {
    this.pdfPlayerEvent.emit(event);
  }

  telemetryEvent(event) {
    this.pdfPlayerEvent.emit(event);
  }
}
