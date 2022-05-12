import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {EditorService} from '../services/editor.service';
@Component({
  selector: 'app-collection-editor',
  templateUrl: './collection-editor.component.html',
  styleUrls: ['./collection-editor.component.scss']
})
export class CollectionEditorComponent implements OnInit {
  public editorConfig = {};
  constructor(private router: Router, public activatedRoute: ActivatedRoute, public editorService: EditorService){}

  ngOnInit(): void {
    this.editorConfig = this.editorService.getConfig();
    console.log(this.editorConfig, 'this.editorConfig');
  }
  editorEventListener(event) {
    this.router.navigate(['editors/content-list/collection-editor']);

  }
}
