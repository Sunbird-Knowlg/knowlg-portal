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
  playerType: any;
  constructor(public router: Router, public contentService: ContentService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.playerType = this.activatedRoute.snapshot.paramMap.get('playerType');
    this.contentList = this.contentService.getContenstList(this.playerType);
  }
  navigateToPlayer(identifier) {
    if (this.playerType === 'pdf') {
      this.router.navigate(['/pdfplayer/' , this.playerType, identifier] );
    } else if (this.playerType === 'epub') {
      this.router.navigate(['/epubplayer/' , identifier, this.playerType] );
    }
  }
}
