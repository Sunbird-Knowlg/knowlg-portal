import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { ContentService } from '../services/content.service';
import { get } from 'lodash-es';

@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentlistComponent implements OnInit {
  contentList = [];
  mimeType: any;
  playerType: any;
  constructor(public router: Router, public contentService: ContentService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.playerType = this.activatedRoute.snapshot.paramMap.get('mimeType');
    this.mimeType = this.contentService.getMimeType(this.playerType);
    const defaultContents = this.contentService.getContenstList(this.playerType);
    this.contentService.search(this.mimeType).subscribe((data: any) => {
      const contents = get(data, 'result.content');
      this.contentList = [...this.contentList, ...contents];
    },
    (err: any) => {
      console.log(err)
      this.contentList = defaultContents;
    }
    )
  }
  navigateToPlayer(content) {
    const playerRedirectURL = this.contentService.playerRedirectURL(this.playerType);
    this.router.navigate([playerRedirectURL, content.identifier]);
  }
}
