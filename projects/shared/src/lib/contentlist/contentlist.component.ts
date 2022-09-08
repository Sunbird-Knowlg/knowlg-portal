import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.css']
})
export class ContentlistComponent implements OnInit {
  @Input() contentList;
  @Output() contentSelect = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.contentList, 'contentList');
  }
  selectContent(content) {
    this.contentSelect.emit(content);
  }
}
