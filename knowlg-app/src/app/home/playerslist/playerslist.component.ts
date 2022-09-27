import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-playerslist',
  templateUrl: './playerslist.component.html',
  styleUrls: ['./playerslist.component.scss'],
})
export class PlayerslistComponent implements OnInit {
  playersArray = [];
  constructor(public router: Router, public contentService: ContentService) { }

  ngOnInit() {
    this.playersArray = this.contentService.getPlayersList();
  }
  navigateToContentList(type) {
    this.router.navigateByUrl('/home/contentList/' + type);
  }
}
