import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentlistComponent implements OnInit {
  contentList = [];
  mimeType: any;
  constructor(public router: Router, public contentService: ContentService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.mimeType = this.activatedRoute.snapshot.paramMap.get('mimeType');
    this.contentList = this.contentService.getContenstList(this.mimeType);
  }
  navigateToPlayer(content) {
    if (this.mimeType === 'pdf') {
      this.router.navigate(['/pdfplayer/' , this.mimeType, content.identifier] );
    } else if (this.mimeType === 'epub') {
      this.router.navigate(['/epubplayer/' , content.identifier, this.mimeType] );
    }
  }
}
