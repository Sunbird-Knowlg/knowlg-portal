import { Component, EventEmitter, Input, NgZone, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-sn-popup',
  templateUrl: './sn-popup.component.html',
  styleUrls: ['./sn-popup.component.scss']
})
export class SnPopupComponent implements OnInit {
  showShareLinkModel: boolean;

  constructor(public dialog: MatDialog, private ngZone: NgZone) { }
  shareLink = location.href;
  @Input() ShowsharePopup;
  @Output() closeSharePopup = new EventEmitter();
  @ViewChild('sharePopUp') sharePopUp: TemplateRef<any>;
  dialogRef: any;

  ngOnInit(): void {
    this.ShowsharePopup.subscribe(() => {
      this.showShareLinkModel = true;
      this.closeSharePopup.emit();
      this.openDialog();
    });
  }

  copyLink(inputElement) {
    inputElement.select();
    document.execCommand('copy');
  }

  openDialog() {
    if (this.sharePopUp){
      this.dialogRef = this.dialog.open(this.sharePopUp, {
        height: '250px',
        width: '600px'
      });
    }
  }

  closeDialog() {
    this.ngZone.run(() => {
      this.dialogRef.close();
    });
  }
}
