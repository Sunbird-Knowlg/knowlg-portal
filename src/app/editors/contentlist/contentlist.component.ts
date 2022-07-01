import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HelperService } from '../../services/helper/helper.service';
import * as _ from 'lodash-es';
import { ConfigService } from '../../services/config/config.service';
import { LocalStorageService } from 'src/app/services/user/localstorage.service';

@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.scss']
})
export class ContentlistComponent implements OnInit {
  public editorType: string;
  public contentArray = [];
  public userData: any;
  constructor(private router: Router, private localStorageService: LocalStorageService,
              public helperService: HelperService, private configService: ConfigService) { }

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
          mimeType: this.configService.editorConfig.CONTENT_TYPES[this.editorType].mimeType,
          objectType: 'Content',
          channel: _.get(this.userData, 'channelId')
        },
        offset: 0,
        limit: 200,
        query: '',
        sort_by: {
          lastUpdatedOn: 'desc'
        }
      }
    };
    if (_.get(this.userData, 'role') === 'creator') {
      req.request.filters  = {...req.request.filters, ...{createdBy: this.userData.userId}};
    }
    this.helperService.contentSearch(req)
      .subscribe((response) => {
        this.contentArray = _.get(response, 'result.content');
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
          framework: 'ekstep_ncert_k-12',
          creator: _.get(this.userData, 'userName'),
          ...(_.omit(this.configService.editorConfig.CONTENT_TYPES[this.editorType], 'editor'))
    }
   };
    this.helperService.createContent(requestData).subscribe(res => {
      console.log(res.result.identifier);
      this.openContent(res.result.identifier);
    }, err => {
      console.log('create content failed ::', err);
    });
  }

  openContent(identifier?: string) {
    const editorType = this.configService.editorConfig.CONTENT_TYPES[this.editorType].editor;
    this.router.navigate(['/editors/' + editorType], { queryParams: { identifier} });
  }

}
