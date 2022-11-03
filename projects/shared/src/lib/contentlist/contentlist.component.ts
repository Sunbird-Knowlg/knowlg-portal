import { OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { ContentListItem } from './content-list-item';

@Component({
  selector: 'lib-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.css']
})
export class ContentlistComponent implements OnInit {
  @Input() contentList: Array<any> = [];
  @Output() contentSelect = new EventEmitter<any>();

  constructor(private utilService: UtilsService) {}

  public contents: Array<ContentListItem>
  ngOnInit() {

    this.contents = this.contentList.map(content => {
      const {color, backgroundColor} = this.utilService.getColors();
      const clonedContent = {...content}
      clonedContent["initial"] = this.utilService.getInitial(content?.name)
      clonedContent["color"] = color
      clonedContent["backgroundColor"] = backgroundColor
      return clonedContent;
    });

  }

  selectContent(content) {
    this.contentSelect.emit(content);
  }

}
