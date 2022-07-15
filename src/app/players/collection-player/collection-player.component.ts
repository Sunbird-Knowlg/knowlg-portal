import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { HelperService } from '../../services/helper/helper.service';
import * as _ from 'lodash-es';
import { Observable } from 'rxjs';
import { CollectionHierarchyAPI } from '../interfaces/content.service';
import { PlatformType, TocCardType } from '@project-sunbird/common-consumption-v9';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CollectionDetailsModelComponent } from './collection-details-model/collection-details-model.component';
import { ContentDetailsModelComponent } from './content-details-model/content-details-model.component';

@Component({
  selector: 'app-collection-player',
  templateUrl: './collection-player.component.html',
  styleUrls: ['./collection-player.component.scss']
})
export class CollectionPlayerComponent implements OnInit, OnDestroy {

  isLoading = true;
  isSelectChapter = false;
  mimeTypeFilters = [{ text: "All", value: 'all' },
  { text: "Video", value: 'video' },
  { text: "Interactive", value: 'interactive' },
  { text: "Docs", value: 'docs' }];
  videoMimeTypes = ['video/mp4', 'video/x-youtube', 'video/webm'];
  interactiveMimeTypes = ['application/vnd.ekstep.ecml-archive', 'application/vnd.ekstep.h5p-archive', 'application/vnd.ekstep.html-archive'];
  pdfMimeType = 'application/pdf';
  epubMimeType = 'application/epub';
  activeMimeTypeFilter: [string];
  selectAll = false;
  isCopyAsCourseClicked = false;
  collectionData: any;
  noContentMessage = "Content not added yet";
  activeContent: any;
  isContentPresent = false;
  isFirstContentLoaded = false;
  selectedItems = [];
  PlatformType = PlatformType;
  TocCardType = TocCardType;
  public queryParams: any;
  showPlayer = false;
  treeModel: any;
  contentIdList = [];
  subscription:any;
  constructor(
    private helperService: HelperService,
    public route: ActivatedRoute,
    public router: Router,
    public dialog: MatDialog
  ) {
    this.router.onSameUrlNavigation = 'ignore';
  }


  openCollectionDetailsModel() {
    this.dialog.open(CollectionDetailsModelComponent,{
      data: {
        collectionData: this.collectionData,
      },
    });
  }

  openContentDetailsModel() {
    this.dialog.open(ContentDetailsModelComponent,{
      data: {
        activeContent: this.activeContent,
      },
    });
  }
  
  ngOnInit(): void {
    this.activeMimeTypeFilter = ['all'];
    this.queryParams = this.route.snapshot.queryParams;
    const collectionId = this.queryParams.collectionId || "KP_FT_1611083388567";
    this.subscription = this.getCollectionHierarchy(collectionId).subscribe();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  selectedFilter(event) {
    this.activeMimeTypeFilter = event.data.value;
  }
  private getCollectionHierarchy(collectionId: string): Observable<{ data: CollectionHierarchyAPI.Content }> {
    const option: any = { params: {} };
    return this.helperService.getCollectionHierarchy(collectionId, option).pipe(
      map((response) => {
        this.collectionData = _.get(response, 'result.content');
        return { data: _.get(response, 'result.content') };
      }));
  }

  tocCardClickHandler(event) {
      this.callinitPlayer(event, );
  }

  callinitPlayer(event) {
    
    if(!(event.event instanceof PointerEvent) && this.isFirstContentLoaded) { 
      return;
    }

    if (event.data.identifier !== _.get(this.activeContent, 'identifier') ) {
      this.isContentPresent = true;
      this.isFirstContentLoaded = true;
      this.activeContent = event.data;
      this.initPlayer(_.get(this.activeContent, 'identifier'));
    }
  }

  isActiveContentVideoType() {
    return this.videoMimeTypes.includes(this.activeContent?.mimeType);
  }

  isActiveContentInteractiveType() {
    return this.interactiveMimeTypes.includes(this.activeContent?.mimeType);
  }

  private initPlayer(id: string): void {
    // Navigate to the route to start the player
    this.showPlayer = false;
    setTimeout(() => {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { identifier: id },
        queryParamsHandling: 'merge'
      });
      
        this.showPlayer = true;
    });
  }

  showNoContent(event) {
    if (event.message === 'No Content Available') {
      this.isContentPresent = false;
    }
  }

  handleSelectedItem(event) {
    if ('selectAll' in event) {
      this.handleSelectAll(event);
    } else {
      if (_.get(event, 'data.selected') === true) {
        this.selectedItems.push(event.data);
      } else {
        _.remove(this.selectedItems, (item) => {
          return (item === event.data);
        });
      }
    }
  }

  handleSelectAll(event) {
    if (_.get(event, 'selectAll') === true) {
      event.data.forEach(element => {
        if (this.selectedItems.indexOf(element) === -1) {
          this.selectedItems.push(element);
        }
      });
    } else if (_.get(event, 'selectAll') === false) {
      this.selectedItems = [];
    }
  }

}
