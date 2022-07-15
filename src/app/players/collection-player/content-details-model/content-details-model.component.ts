import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-content-details-model',
  templateUrl: './content-details-model.component.html',
  styleUrls: ['./content-details-model.component.scss']
})
export class ContentDetailsModelComponent implements OnInit {
  viewPropertiesList: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
   ngOnInit() {
    this.viewPropertiesList = [
      {lable: 'Name', value: this.data.activeContent.name},
      {lable: 'Description', value: this.data.activeContent.description},
      {lable: 'License terms', value: this.data.activeContent.license},
      {lable: 'Compatibility Level', value: this.data.activeContent.compatibilityLevel}
    ];
   }

}
