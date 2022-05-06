import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.scss']
})
export class ContentlistComponent implements OnInit {
public contentType: any;
  constructor(private router: Router, private location: Location, public activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(
      (params) => {
        console.log(params);
        this.contentType  = params['page'];
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
