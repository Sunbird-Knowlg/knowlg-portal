import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent  {

  @Input() playerConfig;
  @Output() playerEvent = new EventEmitter<any>();
  constructor() { }

  playerEventHandler(event) {
    this.playerEvent.emit(event);
  }

  telemetryEvent(event) {
    this.playerEvent.emit(event);
  }
}
