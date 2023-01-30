import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PublishedPopupComponent } from '../published-popup/published-popup.component';
import { LocalStorageService } from 'src/app/services/user/localstorage.service';
import * as _ from 'lodash-es';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isContentReviewer = false;
  public showPublishPopup = false;
  public contentId: string;
  public userData: any;
  public mimeType: any;

  constructor(private activatedRoute: ActivatedRoute, public router: Router, public dialog: MatDialog,
              private localStorageService: LocalStorageService, public location: Location) { }

  ngOnInit(): void {
    this.userData = this.localStorageService.getItem('userData');
    this.contentId = _.get(this.activatedRoute.snapshot, 'params.id');
    this.mimeType = _.get(this.activatedRoute.snapshot, 'params.mimeType');
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.isContentReviewer = params.mode && params.mode === 'review' ? true : false;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PublishedPopupComponent, {
      data: { contentId: this.contentId, userId: this.userData.userId },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  goBack(){
    this.location.back();
  }

}
