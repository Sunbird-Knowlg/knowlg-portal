import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HelperService } from '../../services/helper/helper.service';
import * as _ from 'lodash-es';
import { ConfigService } from '../../services/config/config.service';
import { LocalStorageService } from 'src/app/services/user/localstorage.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-playercontentlist',
  templateUrl: './playercontentlist.component.html',
  styleUrls: ['./playercontentlist.component.scss']
})
export class PlayercontentlistComponent implements OnInit {
  constructor(private router: Router, private localStorageService: LocalStorageService,
              public helperService: HelperService, private configService: ConfigService) { }
  public playerType: string;
  public contentArray = [];

  // MatPaginator
  pagelength = [];
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;

  ngOnInit(): void {
    this.playerType = this.localStorageService.getItem('type');
    this.contentSearch();
  }

  goBack() {
    this.router.navigate(['/players/']);
  }

  contentSearch() {
    const req = {
      request: {
        filters: {
          status: 'Live',
          ...(_.pick(this.configService.editorConfig.CONTENT_TYPES[this.playerType], ['mimeType', 'contentType'])),
          objectType: 'Content',
        },
        offset: this.pageIndex * this.pageSize,
        limit: this.pageSize,
        query: '',
        sort_by: {
          lastUpdatedOn: 'desc'
        }
      }
    };
    this.helperService.contentSearch(req)
      .subscribe((response) => {
        this.contentArray = _.get(response, 'result.content');
        this.pagelength = _.get(response, 'result.count');
      }, (error) => {
        console.log(error);
      });
  }

  onSelectContent(content: any){
    const playerRedirectURL = _.get(this.configService.editorConfig.CONTENT_TYPES[this.playerType], 'playerRedirectURL', null);
    // tslint:disable-next-line:max-line-length
    this.router.navigate([`${playerRedirectURL}/${content.identifier}`]);
  }


  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.contentSearch();
  }

}
