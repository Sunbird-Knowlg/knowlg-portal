import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playerslist',
  templateUrl: './playerslist.component.html',
  styleUrls: ['./playerslist.component.scss'],
})
export class PlayerslistComponent implements OnInit {
  playersArray = [{
    name: 'Pdf',
    contentType: 'pdf'
  },
  {
    name: 'Epub',
    contentType: 'epub'
  },
  {
    name: 'Video',
    contentType: 'video'
  }];
  constructor(public router: Router) { }

  ngOnInit() { }
  navigateToContentList(type) {
    this.router.navigateByUrl('/home/contentList/' + type);
  }
}
