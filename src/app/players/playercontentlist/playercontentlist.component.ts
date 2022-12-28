import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HelperService } from '../../services/helper/helper.service';
import * as _ from 'lodash-es';
import { ConfigService } from '../../services/config/config.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-playercontentlist',
  templateUrl: './playercontentlist.component.html',
  styleUrls: ['./playercontentlist.component.scss']
})

export class PlayercontentlistComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              public helperService: HelperService, private configService: ConfigService) { }
  public contentArray = [];
  public mimeType: any;
  public isLoading = true;
  public defaultContent: any;

  // MatPaginator
  pagelength = [];
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;

  ngOnInit(): void {
    this.mimeType = _.get(this.activatedRoute.snapshot, 'params.mimeType');
    this.defaultContent = this.configService.getContentList(this.mimeType);
    this.contentSearch();
  }

  goBack() {
    this.router.navigate(['/players']);
  }

  contentSearch() {
    const req = {
      request: {
        filters: {
          status: 'Live',
          ...(_.pick(this.configService.editorConfig.CONTENT_TYPES[this.mimeType], ['mimeType', 'contentType'])),
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
        const contents  = _.get(response, 'result.content');
        this.contentArray = [...[this.defaultContent], ...contents];
        this.pagelength = _.get(response, 'result.count');
        this.isLoading = false;
      }, (error) => {
        console.log(error);
        this.contentArray = [this.defaultContent];
        this.isLoading = false;
      });
  }

  navigateToPlayer(content) {
    const playerRedirectURL = this.configService.getPlayerRedirectURL(this.mimeType);
    this.router.navigate([`${playerRedirectURL}/${content.identifier}`]);
}
  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.contentSearch();
  }

}
