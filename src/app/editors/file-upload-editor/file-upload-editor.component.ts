import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, delay, first, mergeMap } from 'rxjs/operators';
import * as _ from 'lodash-es';
declare var jQuery: any;
import { DomSanitizer } from '@angular/platform-browser';
import { HelperService } from 'src/app/services/helper/helper.service';
import { ConfigService } from 'src/app/services/config/config.service';
/**
 * Component Launches the File upload Editor in a IFrame Modal
 */

@Component({
  selector: 'app-file-upload-editor',
  templateUrl: './file-upload-editor.component.html'
})
export class FileUploadEditorComponent implements OnInit, OnDestroy {

  private buildNumber: string;
  public logo: string;
  public showLoader = true;
  public extContWhitelistedDomains: string;
  public ownershipType: Array<string>;
  public queryParams: any;
  public contentDetails: any;
  public videoMaxSize: any;
  public defaultContentFileSize: any;
  genericEditorURL = 'generic-editor/index.html'; // added

  constructor(public zone: NgZone, private activatedRoute: ActivatedRoute, private router: Router,
              private sanitizer: DomSanitizer, private helperService: HelperService, private configService: ConfigService) {
    this.buildNumber = '4.9.0.c10c531'; // added
    this.extContWhitelistedDomains = 'youtube.com,youtu.be'; // added
    this.videoMaxSize = 150;
    this.defaultContentFileSize = 150;
  }
  ngOnInit() {
    this.queryParams = this.activatedRoute.snapshot.queryParams;
    this.getContentDetails().pipe(first(),
      tap((data: any) => {
        this.logo = 'https://dev.sunbirded.org/assets/images/sunbird_logo.png'; // added
        this.ownershipType = data.ownershipType;
        this.initEditor();
        this.setWindowContext();
        this.setWindowConfig();
      }),
      delay(10)) // wait for iziModal lo load
      .subscribe((data) => {
        jQuery('#genericEditor').iziModal('open');
        this.showLoader = false;
      },
        (error) => {
          // if (error === 'NO_PERMISSION') {
          //   this.toasterService.error(this.resourceService.messages.emsg.m0013);
          // } else if (['RESOURCE_SELF_LOCKED', 'RESOURCE_LOCKED'].includes(_.get(error, 'error.params.err'))) {
          //   this.toasterService.error(_.replace(error.error.params.errmsg, 'resource', 'content'));
          // } else {
          //   this.toasterService.error(this.resourceService.messages.emsg.m0004);
          // }
          console.log('error --->', error);
          this.closeModal();
        }
      );
  }

  editorURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.genericEditorURL + '?' + this.buildNumber);
  }

  private getContentDetails() {
    if (this.queryParams.identifier) {
      const options: any = { params: { mode: 'edit' } };
      return this.helperService.getContent(this.queryParams.identifier, options).
        pipe(mergeMap((data) => {
          this.contentDetails = data.result.content;
          console.log('contentDetails', this.contentDetails);
          // if (this.validateRequest()) {
          return of(data);
          // } else {
          // return throwError('NO_PERMISSION');
          // }
        }));
    } else {
      return of({});
    }
  }

  private validateRequest() {
    // const validStatus = _.indexOf(this.configService.editorConfig.GENERIC_EDITOR.contentStatus, this.contentDetails.status) > -1;
    // const validState = _.indexOf(this.configService.editorConfig.GENERIC_EDITOR.contentState, this.routeParams.state) > -1;
    // eslint-disable-next-line max-len
    // if (_.indexOf(this.configService.appConfig.PLAYER_CONFIG.MIME_TYPE.genericMimeType, this.contentDetails.mimeType) > -1 && validStatus) {
    //   if (validState && this.contentDetails.createdBy !== this.userService.userid) {
    //     return true;
    //   } else if (validState && this.contentDetails.createdBy === this.userService.userid) {
    //     return true;
    //   } else if (validState && _.includes(this.contentDetails.collaborators, this.userService.userid)) {
    //     return true;
    //   } else if (this.contentDetails.createdBy === this.userService.userid) {
    //     return true;
    //   }
    //   return false;
    // }
    // return false;
  }


  /**
   * Launch File Upload Editor in the modal
   */
  private initEditor() {
    jQuery('#genericEditor').iziModal({
      title: '',
      iframe: true,
      iframeURL: this.genericEditorURL + '?' + this.buildNumber,
      navigateArrows: false,
      fullscreen: true,
      openFullscreen: true,
      closeOnEscape: true,
      overlayClose: false,
      overlay: false,
      overlayColor: '',
      history: false,
      closeButton: true,
      onClosing: () => {
        this.zone.run(() => {
          this.closeModal();
        });
      }
    });
  }
  private setWindowContext() {
    window.context = _.cloneDeep(this.configService.editorConfig.GENERIC_EDITOR.WINDOW_CONTEXT);
    if (this.queryParams.identifier) {
      window.context.contentId = this.queryParams.identifier;
    }
  }
  private setWindowConfig() {
    window.config = _.cloneDeep(this.configService.editorConfig.GENERIC_EDITOR.WINDOW_CONFIG); // cloneDeep to preserve default config
    window.config.build_number = this.buildNumber;
    window.config.headerLogo = this.logo;
    window.config.lock = _.pick(this.queryParams, 'lockKey', 'expiresAt', 'expiresIn');
    window.config.extContWhitelistedDomains = this.extContWhitelistedDomains;
    window.config.enableTelemetryValidation = false; // added
    window.config.videoMaxSize = this.videoMaxSize;
    window.config.defaultContentFileSize = this.defaultContentFileSize; // making configurable upload limit in workspace for content upload
    window.config.cloudStorage = {
      provider: 'azure',
      presigned_headers: {
        'x-ms-blob-type': 'BlockBlob'
      }
    };
  }

  closeModal() {
    this.showLoader = false;
    if (document.getElementById('genericEditor')) {
      document.getElementById('genericEditor').remove();
    }
    // Redirect to home page or content list page
    this.router.navigate(['editors/content-list']);
  }

  ngOnDestroy() {
    if (document.getElementById('genericEditor')) {
      document.getElementById('genericEditor').remove();
    }
    const removeIzi = document.querySelector('.iziModal-isAttached');
    if (removeIzi) {
      removeIzi.classList.remove('iziModal-isAttached');
    }
  }
}
