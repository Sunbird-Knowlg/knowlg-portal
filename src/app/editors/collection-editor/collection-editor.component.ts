import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from '../../services/helper/helper.service';
import * as _ from 'lodash-es';
import { forkJoin, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/services/user/localstorage.service';
@Component({
  selector: 'app-collection-editor',
  templateUrl: './collection-editor.component.html',
  styleUrls: ['./collection-editor.component.scss']
})
export class CollectionEditorComponent implements OnInit, OnDestroy {
  public editorConfig: any;
  public queryParams: any;
  public content: any;
  public channelData; any;
  public hierarchyConfig;
  public userData: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public helperService: HelperService,
              public localStorageService: LocalStorageService){}

  ngOnInit(): void {
    this.userData = this.localStorageService.getItem('userData');
    this.queryParams = this.activatedRoute.snapshot.queryParams;
    this.initialize();
  }

  initialize() {
    this.getContentDetails(_.get(this.queryParams, 'identifier')).pipe(map(content => {
      this.content = content;
      return content;
    }), mergeMap(contentData => {
      return forkJoin([
        this.getChannel(contentData.channel),
        this.getFrameWorkDetails()
      ]);
    })).subscribe(([channelData, categoryData]: any) => {
      this.channelData = channelData;
      this.setHierarchyConfig(categoryData);
    });
  }

  editorEventListener(event) {
    this.router.navigate(['editors/content-list']);
  }

  getContentDetails(identifier: string): Observable<any> {
    const options: any = { params: { mode: 'edit' } };
    return this.helperService.getContent(identifier, options).
    pipe(map(response => {
      return _.get(response, 'result.content');
    }));
  }

  getChannel(channelId: string): Observable<any> {
    return this.helperService.getChannel(channelId).pipe(map(response => {
      return _.get(response, 'result.channel');
    }));
  }

  getFrameWorkDetails(): Observable<any> {
    return this.helperService.getCategoryDefinition('Collection', _.get(this.content, 'primaryCategory'), _.get(this.content, 'channel'))
    .pipe(map(response => {
      return _.get(response, 'result.objectCategoryDefinition');
    }));
  }

  setHierarchyConfig(data: any) {
    // tslint:disable-next-line:max-line-length
    if (_.get(data, 'objectMetadata.config')) {
      this.hierarchyConfig = _.get(data, 'objectMetadata.config.sourcingSettings.collection');
      if (!_.isEmpty(this.hierarchyConfig.children)) {
        this.hierarchyConfig.children = this.getPrimaryCategoryData(this.hierarchyConfig.children);
      }
      if (!_.isEmpty(this.hierarchyConfig.hierarchy)) {
        _.forEach(this.hierarchyConfig.hierarchy, (hierarchyValue) => {
          if (_.get(hierarchyValue, 'children')) {
            hierarchyValue.children = this.getPrimaryCategoryData(_.get(hierarchyValue, 'children'));
          }
        });
      }
    }
    this.setEditorConfig();
    this.editorConfig.context.framework = _.get(this.content, 'framework');
    if (_.get(this.content, 'primaryCategory') && _.get(this.content, 'primaryCategory') !== 'Curriculum Course') {
      this.editorConfig.context.targetFWIds = _.get(this.content, 'targetFWIds');
    }
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

  setEditorConfig() {
    // tslint:disable-next-line:max-line-length
    const additionalCategory = _.merge(_.get(this.channelData, 'contentAdditionalCategories'), _.get(this.channelData, 'collectionAdditionalCategories'));
    this.editorConfig = {
      context: {
        identifier: _.get(this.content, 'identifier'),
        channel: _.get(this.content, 'channel'),
        authToken: '',
        sid: 'vLpZ1rFl6-sxMVHi4RrmrlHw0HsX9ggC',
        did: '1d8e290dd3c2a6a9eeac58568cdef28d',
        uid: _.get(this.userData, 'userId'),
        additionalCategories: additionalCategory,
        host: 'http://localhost:3000',
        pdata: {
          id: 'local.sunbird..knowledge.portal',
          ver: '1.0.0',
          pid: 'sunbird-knowledge-portal'
        },
        actor: {
          id: _.get(this.userData, 'userId'),
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
          id: _.get(this.userData, 'userId'),
          orgIds: [
            '01309282781705830427'
          ],
          organisations: {},
          fullName: _.get(this.userData, 'userName'),
          firstName:  _.get(this.userData, 'userName'),
          lastName: '',
          isRootOrgAdmin: true
        },
        channelData: this.channelData,
        cloudStorageUrls: '',
        cloudStorage: {
          presigned_headers: {
            'x-ms-blob-type': 'BlockBlob'
          }
        }
      },
      config: {
        mode: this.getEditorMode(),
        collection: {
          maxContentsLimit: 1200
        },
      }
    };
    this.editorConfig.config.showAddCollaborator = true;
    this.editorConfig.config.publicStorageAccount = '';
    this.editorConfig.config = _.assign(this.editorConfig.config, this.hierarchyConfig);
  }

  getEditorMode() {
    const contentStatus = _.toLower(_.get(this.content, 'status'));
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

  ngOnDestroy() {
    this.editorConfig = null;
  }

}
