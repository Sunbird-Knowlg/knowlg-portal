import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() playerConfig;
  @Output() playerEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  playerEventHandler(event) {
    this.playerEvent.emit(event);
  }

  telemetryEvent(event) {
    this.playerEvent.emit(event);
  }
}
