import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../../services/helper/helper.service';

@Component({
  selector: 'app-collection-editor',
  templateUrl: './collection-editor.component.html',
  styleUrls: ['./collection-editor.component.scss']
})
export class CollectionEditorComponent implements OnInit {
  public editorConfig = {};
  constructor(private router: Router, public helperService: HelperService){}

  ngOnInit(): void {
    this.editorConfig = this.helperService.getConfig();
    console.log(this.editorConfig, 'this.editorConfig');
  }
  editorEventListener(event) {
    this.router.navigate(['editors/content-list/collection-editor']);

  }
}
