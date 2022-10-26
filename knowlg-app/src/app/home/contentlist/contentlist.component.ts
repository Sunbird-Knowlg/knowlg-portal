import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { ContentService } from '../services/content.service';
import { ContentService as APIService } from 'shared';
import  { get } from 'lodash-es'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentlistComponent implements OnInit {
  contentList = [];
  contents = [];
  mimeType: any;
  constructor(public router: Router, public contentService: ContentService, public activatedRoute: ActivatedRoute,
    private apiService: APIService) { }

  ngOnInit() {
    this.mimeType = this.activatedRoute.snapshot.paramMap.get('mimeType');
    this.contentList = this.contentService.getContenstList(this.mimeType);
    this.apiService.initialize({
      readURL: environment.contentReadURL,
      searchURL: environment.compositeSearchURL
    })
    this.apiService.search({
      "request": {
        "filters": {
          "status": [
            "Live"
          ],
          "mimeType": `application/${this.mimeType}`,
          "objectType": "Content"
        },
        "query": "",
        "sort_by": {
          "lastUpdatedOn": "desc"
        }
      }
    }).subscribe((data: any) => {
      this.contents = get(data, 'result.content');
      this.contentList = [...this.contentList, ...this.contents]
    },
    (err: any) => {
      console.log(err)
    } 
    )
  }
  navigateToPlayer(content) {
      this.router.navigate(['/player/', this.mimeType, content.identifier]);
  }
}
