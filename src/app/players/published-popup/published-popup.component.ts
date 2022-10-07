import { Component, Inject, OnInit, ViewChildren } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash-es';
import { HelperService } from 'src/app/services/helper/helper.service';

/**
 * This component displays the checklist for publish content for reviewer and
 * calls the Publish API to publish the content
 */
@Component({
  selector: 'app-published-popup',
  templateUrl: './published-popup.component.html'
})
export class PublishedPopupComponent implements OnInit {
  @ViewChildren('inputFields') inputFields;
  userId: string;
  contentId: string;
  comment: string;
  reasons = [];
  isDisabled = true;
  checkListData: any;
  showDefaultConfig = false;
  showloader = true;
  publishCheckListData: any;

  constructor(private route: Router, private activatedRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<PublishedPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private helperService: HelperService) { }


  ngOnInit() {
    this.contentId = this.data.contentId;
    this.userId = this.data.userId;
    this.getCheckListConfig();
  }

  /**
   * This method pushes all the checked reason into a array
   */
  createCheckedArray(checkedItem) {
    if (checkedItem && (_.indexOf(this.reasons, checkedItem) === -1)) {
      this.reasons.push(checkedItem);
    } else if (checkedItem && (_.indexOf(this.reasons, checkedItem) !== -1)) {
      this.reasons.splice(_.indexOf(this.reasons, checkedItem), 1);
    }
    this.validateModal();
  }

  /**
   * This method checks whether the length of comments is greater than zero.
   * It also checks whether a reject reason is checked.
   * If both the validation is passed it enables the request changes button
   */
  validateModal() {
    if ((this.inputFields && this.inputFields.length === this.reasons.length) || this.showDefaultConfig) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  /**
   * This method builds the request body and call the publish API.
   */
  submitPublishChanges() {
    this.isDisabled = true;
    const requestBody = {
      content: {
        publishChecklist: this.reasons,
        lastPublishedBy: this.userId
      }
    };
    this.helperService.publishContent(requestBody, this.contentId).subscribe(response => {
      alert('Content published successfully...');
      // this.deleteReviewComments();
      this.redirect();
    }, (err) => {
      console.log(err);
      alert('Publishing content failed, please try again later...');
      this.redirect();
    });
  }

  navigateToWorkspace() {
    // if (this.closeUrl.url.includes('flagreviewer')) {
    //   this.route.navigate(['workspace/content/flagreviewer/1']);
    // } else {
    //   this.route.navigate(['workspace/content/upForReview/1']);
    // }
  }

  // deleteReviewComments() {
  //   if (this.contentId !== _.get(this.reviewCommentsService.contextDetails, 'contentId')) { // if stageId not fetched, throw error
  //     this.navigateToWorkspace();
  //     return ;
  //   }
  //   const requestBody = {
  //     request: {
  //       contextDetails: {
  //         contentId: _.get(this.reviewCommentsService.contextDetails, 'contentId'),
  //         contentVer: _.get(this.reviewCommentsService.contextDetails, 'contentVer'),
  //         contentType: _.get(this.reviewCommentsService.contextDetails, 'contentType')
  //       }
  //     }
  //   };
  //   this.reviewCommentsService.deleteComment(requestBody)
  //   .subscribe((res) => this.navigateToWorkspace(),
  //   (err) => this.navigateToWorkspace());
  // }

  /**
   * Method to redirect to parent url
   */
  redirect() {
    this.closeDialog();
    this.route.navigate(['/editors/content-list']);
  }

  getCheckListConfig() {
    this.showDefaultConfig = false;
    const formServiceInputParams = {
      formType: 'content',
      formAction: 'publish',
      subType: 'resource'
    };
    this.helperService.getFormData(formServiceInputParams).subscribe(
      (data: any) => {
        if (data.result.form) {
          this.showloader = false;
          this.publishCheckListData = data.result.form.data.fields[0];
        } else {
          this.showloader = false;
          this.showDefaultConfig = true;
          this.validateModal();
        }
      }, (err: any) => {
        console.log(err);
        this.closeModalAfterError();
      }
    );
  }

  closeModalAfterError() {
    alert('Something went wrong, try again late');
    this.redirect();
  }

  closeDialog(data?: any): void {
    this.dialogRef.close(data);
  }

}
