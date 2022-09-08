import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.css']
})
export class ContentlistComponent {
  @Input() contentList;
  @Output() contentSelect = new EventEmitter<any>();

  selectContent(content) {
    this.contentSelect.emit(content);
  }
}
