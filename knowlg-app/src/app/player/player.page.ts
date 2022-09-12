import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash-es';
import { ContentService } from '../home/services/content.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {
  playerConfig = {};
  mimeType: any;
  constructor(public router: Router, public activatedRoute: ActivatedRoute, public contentService: ContentService) { }

   ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
      this.playerConfig =  this.contentService.preparePlayerConfig(params['id'], params['mimeType']);
      this.mimeType = params.mimeType;

    });
  }
  playerEvent(event) {
    const eventType = _.get(event, 'edata.type');
    switch (eventType) {
      case 'EXIT':
        this.router.navigate(['/home/contentList/' + this.mimeType]);
        break;
    }
  }
}
