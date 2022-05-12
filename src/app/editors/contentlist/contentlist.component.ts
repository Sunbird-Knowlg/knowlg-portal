import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HelperService } from '../../services/helper/helper.service';
import * as _ from 'lodash-es';

@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.scss']
})
export class ContentlistComponent implements OnInit {
  public contentType: string;
  public contentArray = [];
  public editorConfig = {};
  public content: any;
  public hierarchyConfig = {};
  public channelData: any;
  constructor(private router: Router, private location: Location, public activatedRoute: ActivatedRoute,
              public helperService: HelperService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(
        (params) => {
          this.contentType = params['page'];
        }
      );
    this.getAllCollectionList();
  }

  goBack() {
    this.location.back();
  }
  openContent(id) {
    this.helperService.getContent(id)
      .subscribe((response) => {
        this.content = _.get(response, 'result.content');
        this.getChannel(_.get(response, 'result.content.channel'));
      }, (error) => {
        console.log(error);
      });
  }
  getChannel(channelId) {
    this.helperService.getChannel(channelId)
    .subscribe((response) => {
      this.channelData = _.get(response, 'result.channel');
      this.getFrameWorkDetails();
    }, (error) => {
      console.log(error);
    });

  }
  getFrameWorkDetails() {
    this.helperService.getCategoryDefinition('Collection', this.content.primaryCategory, this.content.channel)
    .subscribe(data => {
      // tslint:disable-next-line:max-line-length
      if (_.get(data, 'result.objectCategoryDefinition.objectMetadata.config')) {
        this.hierarchyConfig = _.get(data, 'result.objectCategoryDefinition.objectMetadata.config.sourcingSettings.collection');
        if (!_.isEmpty(this.hierarchyConfig['children'])) {
          this.hierarchyConfig['children'] = this.getPrimaryCategoryData(this.hierarchyConfig['children']);
        }
        if (!_.isEmpty(this.hierarchyConfig['hierarchy'])) {
          _.forEach(this.hierarchyConfig['hierarchy'], (hierarchyValue) => {
            if (_.get(hierarchyValue, 'children')) {
              hierarchyValue['children'] = this.getPrimaryCategoryData(_.get(hierarchyValue, 'children'));
            }
          });
        }
      }
      this.setEditorConfig();
    }, err => {
    });
  }
  getPrimaryCategoryData(childrenData) {
    _.forEach(childrenData, (value, key) => {
      if (_.isEmpty(value)) {
        switch (key) {
          case 'Content':
            childrenData[key] = this.channelData.contentPrimaryCategories || [];
            break;
          case 'Collection':
            childrenData[key] = this.channelData.collectionPrimaryCategories || [];
            break;
        }
      }
    });
    return childrenData;
  }
  getAllCollectionList() {
    const req = {
      request: {
        filters: {
          status: [
            'Draft',
            'FlagDraft',
            'Review',
            'Processing',
            'Live',
            'Unlisted',
            'FlagReview'
          ],
          contentType: [
            'TextBook',
            'Collection',
            'Course'
          ],
          objectType: 'Content',
          channel: '01309282781705830427',
          createdBy: '5a587cc1-e018-4859-a0a8-e842650b9d64'
        },
        offset: 0,
        limit: 20,
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
  setEditorConfig() {
    // tslint:disable-next-line:max-line-length
    const additionalCategory = _.merge(this.channelData.contentAdditionalCategories, this.channelData.collectionAdditionalCategories);
    this.editorConfig = {
      context: {
        identifier: this.content.identifier,
        channel: this.content.channel,
        authToken: '',
        sid: 'vLpZ1rFl6-sxMVHi4RrmrlHw0HsX9ggC',
        did: '1d8e290dd3c2a6a9eeac58568cdef28d',
        uid: '5a587cc1-e018-4859-a0a8-e842650b9d64',
        additionalCategories: additionalCategory,
        host: 'http://localhost:3000',
        pdata: {
          id: 'local.sunbird..knowledge.portal',
          ver: '1.0.0',
          pid: 'sunbird-knowledge-portal'
        },
        actor: {
          id: '5a587cc1-e018-4859-a0a8-e842650b9d64',
          type: 'User'
        },
        contextRollup: {
          l1: '01309282781705830427'
        },
        tags: [
          '01309282781705830427',
          '01309282781705830427'
        ],
        timeDiff: -0.463,
        defaultLicense: _.get(this.channelData, 'defaultLicense'),
        endpoint: '/data/v3/telemetry',
        env: 'collection_editor',
        user: {
          id: '5a587cc1-e018-4859-a0a8-e842650b9d64',
          orgIds: [
            '01309282781705830427'
          ],
          organisations: {},
          fullName: 'N11',
          firstName: 'N11',
          lastName: '',
          isRootOrgAdmin: true
        },
        channelData: this.channelData,
        cloudStorageUrls: ''
      },
      config: {
        mode: this.getEditorMode(),
        collection: {
          maxContentsLimit: 1200
        },
      }
    };
    this.editorConfig['config'].showAddCollaborator = false;
    this.editorConfig['config'].publicStorageAccount = '';

    this.editorConfig['config'] = _.assign(this.editorConfig['config'], this.hierarchyConfig);

    this.helperService.setConfig(this.editorConfig);
    this.navigateToContentCreate();
  }
  getEditorMode() {
    const contentStatus = this.content.status.toLowerCase();
    if (contentStatus === 'draft' || contentStatus === 'live' || contentStatus === 'flagdraft'
      || contentStatus === 'unlisted') {
      return 'edit';
    }

    if (contentStatus === 'flagged' || contentStatus === 'flagreview') {
      return 'read';
    }

    if (contentStatus === 'review') {
      return 'review';
    }
  }
  navigateToContentCreate() {
    this.router.navigate(['/editors/' + this.contentType], { queryParams: { identifier: this.content.identifier } });
    // this.router.navigate(['editors/' + this.contentType + '/' + identifier]);
  }
}
