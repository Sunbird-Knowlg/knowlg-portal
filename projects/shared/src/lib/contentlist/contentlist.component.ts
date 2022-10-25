import { OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'lib-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.css']
})
export class ContentlistComponent implements OnInit {
  @Input() contentList;
  @Output() contentSelect = new EventEmitter<any>();

  public contents: Array<{name: string, description?: string, initial: string, color: string, backgroundColor: string}>
  ngOnInit() {

    this.contents = this.contentList.map(content => {
      const {color, backgroundColor} = this.getColors();
      const clonedContent = {...content}
      clonedContent["initial"] = this.getInitial(content?.name)
      clonedContent["color"] = color
      clonedContent["backgroundColor"] = backgroundColor
      return clonedContent;
    });

  }

  selectContent(content) {
    this.contentSelect.emit(content);
  }

  getInitial(name:string) {
    return (name ? name.charAt(0): '')
  }

  getColors() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    return {"color": "rgb(" + x + "," + y + "," + z + ")",  backgroundColor: "rgba(" + x + "," + y + "," + z + ", 0.2)" }
  }

  
}
