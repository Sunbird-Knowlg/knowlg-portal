import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CollectionHierarchyAPI } from '../../interfaces/content.service';
@Component({
  selector: 'app-collection-details-model',
  templateUrl: './collection-details-model.component.html',
  styleUrls: ['./collection-details-model.component.scss']
})
export class CollectionDetailsModelComponent implements OnInit{
  viewPropertiesList : any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
   ngOnInit() {
    this.viewPropertiesList = [
      {"lable": "Name", "value": this.data.collectionData.name},
      {"lable": "Description", "value": this.data.collectionData.description},
      {"lable": "License terms", "value": this.data.collectionData.license},
      {"lable": "Compatibility Level", "value": this.data.collectionData.compatibilityLevel}
    ];
   }

}
