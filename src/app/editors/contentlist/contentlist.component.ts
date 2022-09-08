import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HelperService } from '../../services/helper/helper.service';
import * as _ from 'lodash-es';
import { ConfigService } from '../../services/config/config.service';
import { LocalStorageService } from 'src/app/services/user/localstorage.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.scss']
})
export class ContentlistComponent implements OnInit {
  constructor(private router: Router, private localStorageService: LocalStorageService,
              public helperService: HelperService, private configService: ConfigService) { }
  public editorType: string;
  public contentArray = [];
  public userData: any;

  // MatPaginator
  pagelength = [];
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;

  ngOnInit(): void {
    this.editorType = this.localStorageService.getItem('type');
    this.userData = this.localStorageService.getItem('userData');
    this.contentSearch();
  }

  goBack() {
    this.router.navigate(['/editors/']);
  }

  contentSearch() {
    const req = {
      request: {
        filters: {
          status: this.configService.editorConfig[_.get(this.userData, 'role')],
          mimeType: _.get(this.configService.editorConfig.CONTENT_TYPES[this.editorType], 'mimeType'),
          objectType: 'Content',
          channel: _.get(this.userData, 'channelId'),
        },
        offset: this.pageIndex * this.pageSize,
        limit: this.pageSize,
        query: '',
        sort_by: {
          lastUpdatedOn: 'desc'
        }
      }
    };
    if (_.get(this.userData, 'role') === 'creator') {
      req.request.filters  = {...req.request.filters, ...{createdBy: this.userData.userId}};
    } else if (_.get(this.userData, 'role') === 'reviewer'){
      req.request.filters  = {...req.request.filters, ...{createdBy: { '!=' :  this.userData.userId}}};
    } else if (_.get(this.userData, 'role') === 'collaborator'){
      req.request.filters  = {...req.request.filters, ...{collaborators: [this.userData.userId]}};
    }

    this.helperService.contentSearch(req)
      .subscribe((response) => {
        this.contentArray = _.get(response, 'result.content');
        this.pagelength = _.get(response, 'result.count');
      }, (error) => {
        console.log(error);
      });
  }

  createContent() {

    if (this.editorType !== 'collection' && this.editorType !== 'ecml') {
      this.openContent();
      return;
    }

    const requestData = {
      content: {
          code: 'Enter title',
          name: 'Enter title',
          description: 'Enter description ',
          createdBy: _.get(this.userData, 'userId'),
          organisation: ['NIT', 'MPPS MUKKADAMPALLI'],
          createdFor: [_.get(this.userData, 'channelId')],
          framework: 'knowlg_k-12',
          creator: _.get(this.userData, 'userName'),
          ...(_.omit(this.configService.editorConfig.CONTENT_TYPES[this.editorType], 'editor'))
    }
   };
    this.helperService.createContent(requestData).subscribe(res => {
      this.openContent(res.result.content_id || res.result.identifier);
    }, err => {
      console.log('create content failed ::', err);
    });
  }

  openContent(identifier?: string) {
    const editorType = _.get(this.configService.editorConfig.CONTENT_TYPES[this.editorType], 'editor');
    this.router.navigate(['/editors/' + editorType], { queryParams: { identifier} });
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.contentSearch();
  }

}
