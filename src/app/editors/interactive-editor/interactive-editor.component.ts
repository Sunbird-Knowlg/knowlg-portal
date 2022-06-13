import { Component, OnInit, NgZone, Renderer2, OnDestroy } from '@angular/core';
import * as _ from 'lodash-es';
import * as iziModal from 'izimodal/js/iziModal';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { mergeMap, tap, delay, first } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper/helper.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { DomSanitizer } from '@angular/platform-browser';
declare var jQuery: any;
jQuery.fn.iziModal = iziModal;

/**
 * Component Launches the Interactive Editor in a IFrame Modal
 */
@Component({
  selector: 'app-interactive-editor',
  templateUrl: './interactive-editor.component.html'
})
export class InteractiveEditorComponent implements OnInit, OnDestroy {

  private buildNumber: string;
  public logo: string;
  public showLoader = true;
  public contentDetails: any;
  public ownershipType: Array<string>;
  public queryParams: any;
  public videoMaxSize: any;
  contentEditorURL = 'content-editor/index.html';

  /**
   * Default method of class InteractiveEditorComponent
   */
  constructor(private activatedRoute: ActivatedRoute, private zone: NgZone, private renderer: Renderer2,
              private router: Router, private helperService: HelperService,
              private configService: ConfigService, private sanitizer: DomSanitizer
  ) {
    this.buildNumber = '4.9.0.c10c531';
    this.videoMaxSize = '150';
  }
  ngOnInit() {
    this.queryParams = this.activatedRoute.snapshot.queryParams;
    this.getContentDetails().pipe( first(),
      tap((data: any) => {
        this.logo = 'https://dev.sunbirded.org/assets/images/sunbird_logo.png'; // added
        this.ownershipType = data.ownershipType;
        // this.initEditor();
        this.setWindowContext();
        this.setWindowConfig();
      }),
      delay(10)) // wait for iziModal lo load
      .subscribe((data) => {
        // jQuery('#contentEditor').iziModal('open');
        this.setRenderer();
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
          this.closeModal();
        });
  }

  editorURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.contentEditorURL + '?' + this.buildNumber);
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

  private setRenderer() {
    this.renderer.listen('window', 'editor:metadata:edit', () => {
      this.closeModal();
    });
    this.renderer.listen('window', 'editor:window:close', () => {
      this.closeModal();
    });
    this.renderer.listen('window', 'editor:content:review', () => {
      this.closeModal();
    });
  }
  private initEditor() {
    jQuery('#contentEditor').iziModal({
      title: '',
      iframe: true,
      iframeURL: this.contentEditorURL + '?' + this.buildNumber,
      navigateArrows: false,
      fullscreen: true,
      openFullscreen: true,
      closeOnEscape: false,
      overlayClose: false,
      overlay: false,
      overlayColor: '',
      history: false,
      onClosing: () => {
        this.zone.run(() => {
          this.closeModal();
        });
      }
    });
  }
  private setWindowContext() {
    window.context = _.cloneDeep(this.configService.editorConfig.INTERACTIVE_EDITOR.WINDOW_CONTEXT);
    if (this.queryParams.identifier) {
      window.context.contentId = this.queryParams.identifier;
    }
  }
  private setWindowConfig() {
    window.config = _.cloneDeep(this.configService.editorConfig.INTERACTIVE_EDITOR.WINDOW_CONFIG); // cloneDeep to preserve default config
    window.config.build_number = this.buildNumber;
    window.config.headerLogo = this.logo;
    window.config.aws_s3_urls = ['https://s3.ap-south-1.amazonaws.com/ekstep-public-qa/', 'https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/', 'https://sunbirddev.blob.core.windows.net/sunbird-content-dev/']
    window.config.enableTelemetryValidation = false; // telemetry validation
    window.config.lock = _.pick(this.queryParams, 'lockKey', 'expiresAt', 'expiresIn');
    window.config.videoMaxSize = this.videoMaxSize;
  }

  /**
   * checks the permission using state, status and userId
   */
  private validateRequest() {
    // const validStatus = _.indexOf(this.configService.editorConfig.CONTENT_EDITOR.contentStatus, this.contentDetails.status) > -1;
    // const validState = _.indexOf(this.configService.editorConfig.CONTENT_EDITOR.contentState, this.routeParams.state) > -1;
    // if (this.contentDetails.mimeType === this.configService.appConfig.CONTENT_CONST.CREATE_LESSON && validStatus) {
    //   if (validState && this.contentDetails.createdBy !== this.userService.userid) {
    //     return true; // we need to remove this case or validState should be changed
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
   * Re directed to the draft on close of modal
   */
  closeModal() {
    this.showLoader = false;
    if (document.getElementById('contentEditor')) {
      document.getElementById('contentEditor').remove();
    }
    // Redirect to home page or content list page
    console.log('close modal');
  }

  ngOnDestroy() {
    if (document.getElementById('contentEditor')) {
      document.getElementById('contentEditor').remove();
    }
    const removeIzi = document.querySelector('.iziModal-isAttached');
    if (removeIzi) {
      removeIzi.classList.remove('iziModal-isAttached');
    }
  }
}
