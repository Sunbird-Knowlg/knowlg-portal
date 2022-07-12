import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { HelperService } from '../../services/helper/helper.service';
import * as _ from 'lodash-es';
import { Observable } from 'rxjs';
import { CollectionHierarchyAPI } from '../interfaces/content.service';
import { PlatformType, TocCardType } from '@project-sunbird/common-consumption-v9';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-collection-player',
  templateUrl: './collection-player.component.html',
  styleUrls: ['./collection-player.component.scss']
})
export class CollectionPlayerComponent implements OnInit {

  isLoading = true;
  isSelectChapter = false;
  mimeTypeFilters = [{ text: "All", value: 'all' },
  { text: "Video", value: 'video' },
  { text: "Interactive", value: 'interactive' },
  { text: "Docs", value: 'docs' }];
  activeMimeTypeFilter: [string];
  selectAll = false;
  isCopyAsCourseClicked = false;
  collectionData: any;
  noContentMessage = "Content not added yet";
  activeContent: any;
  isContentPresent = false;
  selectedItems = [];
  PlatformType = PlatformType;
  TocCardType = TocCardType;

  constructor(
    private helperService: HelperService,
    public route: ActivatedRoute,
    public router: Router
  ) { 
    this.router.onSameUrlNavigation = 'ignore';
  }

  ngOnInit(): void {
    this.activeMimeTypeFilter = ['all'];
    this.getCollectionHierarchy("do_112818443587420160125").subscribe();
    
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
    this.callinitPlayer(event);
  }

  callinitPlayer(event) {
    if (event.data.identifier !== _.get(this.activeContent, 'identifier')) {
      this.isContentPresent = true;
      this.activeContent = event.data;
      this.initPlayer(_.get(this.activeContent, 'identifier'));
    }
  }

  private initPlayer(id: string): void {
    // Navigate to the route to start the player
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
