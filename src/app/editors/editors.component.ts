import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/user/localstorage.service';

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.scss']
})
export class EditorsComponent implements OnInit {

  constructor(private router: Router, private localStorageService: LocalStorageService){}

  ngOnInit(): void {}

  navigateToContentList(type: string): void  {
    this.localStorageService.setItem('type', type);
    this.router.navigate(['editors/content-list']);
  }
}
