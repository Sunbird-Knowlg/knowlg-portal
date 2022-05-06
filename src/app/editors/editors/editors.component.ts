import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.scss']
})
export class EditorsComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
  }
  navigateToContentList(path) {
    this.router.navigate(['editors/content-list/' + path]);
  }
}
