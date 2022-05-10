import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {EditorService} from '../editor.service';
@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.scss']
})
export class ContentlistComponent implements OnInit {
  public contentType: any;
  public contentArray = [
    {
      name: 'collection',
      contentType: 'course',
      status: 'Draft'
    },
    {
      name: 'textBook name',
      contentType: 'TextBook',
      status: 'Review'
    },
    {
      name: 'collection name',
      contentType: 'collection',
      status: 'Draft'
    },
    {
      name: 'collection',
      contentType: 'course',
      status: 'Draft'
    },
    {
      name: 'textBook name',
      contentType: 'TextBook',
      status: 'Review'
    },
    {
      name: 'collection name',
      contentType: 'collection',
      status: 'Draft'
    },
    {
      name: 'collection',
      contentType: 'course',
      status: 'Draft'
    },
    {
      name: 'textBook name',
      contentType: 'TextBook',
      status: 'Review'
    },
    {
      name: 'collection name',
      contentType: 'collection',
      status: 'Draft'
    },
    {
      name: 'collection',
      contentType: 'course',
      status: 'Draft'
    },
    {
      name: 'textBook name',
      contentType: 'TextBook',
      status: 'Review'
    },
    {
      name: 'collection name',
      contentType: 'collection',
      status: 'Draft'
    },
    {
      name: 'collection',
      contentType: 'course',
      status: 'Draft'
    },
    {
      name: 'textBook name',
      contentType: 'TextBook',
      status: 'Review'
    },
    {
      name: 'collection name',
      contentType: 'collection',
      status: 'Draft'
    },
    {
      name: 'collection',
      contentType: 'course',
      status: 'Draft'
    },
    {
      name: 'textBook name',
      contentType: 'TextBook',
      status: 'Review'
    },
    {
      name: 'collection name',
      contentType: 'collection',
      status: 'Draft'
    },
    {
      name: 'collection',
      contentType: 'course',
      status: 'Draft'
    },
    {
      name: 'textBook name',
      contentType: 'TextBook',
      status: 'Review'
    },
    {
      name: 'collection name',
      contentType: 'collection',
      status: 'Draft'
    }
  ];
  public currentPage: any;
  constructor(private router: Router, private location: Location, public activatedRoute: ActivatedRoute,
              public editorService: EditorService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(
        (params) => {
          console.log(params);
          this.contentType = params['page'];
        }
      );
  }
  navigateToContentCreate() {
    this.router.navigate(['editors/' + this.contentType]);
  }
  goBack() {
    this.location.back();
  }
}
