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
  public userData = {
    userName: 'Test',
    role: 'creator',
    channel: '01309282781705830427',
    userId: '5a587cc1-e018-4859-a0a8-e842650b9d64'
  };
  constructor(private router: Router, private localStorageService: LocalStorageService,
              public helperService: HelperService, private configService: ConfigService) { }

  ngOnInit(): void {
    this.editorType = this.localStorageService.getItem('type');
    this.getAllCollectionList();
  }

  goBack() {
    this.router.navigate(['/editors/']);
  }

  getAllCollectionList() {
    const req = {
      request: {
        filters: {
          status: this.configService.editorConfig[this.userData.role],
          mimeType: this.configService.editorConfig.CONTENT_TYPES[this.editorType].mimeType,
          objectType: 'Content',
          channel: this.userData.channel,
          createdBy: this.userData.userId
        },
        offset: 0,
        limit: 200,
        query: '',
        sort_by: {
          lastUpdatedOn: 'desc'
        }
      }
    };
    this.helperService.getAllCollectionList(req)
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
          createdBy: this.userData.userId,
          organisation: ['NIT', 'MPPS MUKKADAMPALLI'],
          createdFor: [this.userData.channel],
          framework: 'ekstep_ncert_k-12',
          creator: this.userData.userName,
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
