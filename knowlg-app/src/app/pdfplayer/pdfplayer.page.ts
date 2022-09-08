import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash-es';
import { ContentService } from '../home/services/content.service';

@Component({
  selector: 'app-pdfplayer',
  templateUrl: './pdfplayer.page.html',
  styleUrls: ['./pdfplayer.page.scss'],
})
export class PdfplayerPage implements OnInit {
  playerConfig = {};
  constructor(public router: Router, public activatedRoute: ActivatedRoute, public contentService: ContentService) { }

   ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
      this.playerConfig =  this.contentService.preparePlayerConfig(params['id'], params['playerType']);
    });
  }
  pdfPlayerEvent(event) {
    const eventType = _.get(event, 'edata.type');
    switch (eventType) {
      case 'EXIT':
        this.router.navigate(['/home/contentList/pdf']);
        break;
    }
  }
}
