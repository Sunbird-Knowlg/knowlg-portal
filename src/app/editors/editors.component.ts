import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/user/localstorage.service';
import { ConfigService } from '../services/config/config.service';

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.scss']
})
export class EditorsComponent implements OnInit {
  userData: any;
  constructor(private router: Router, private localStorageService: LocalStorageService,
              public configService: ConfigService){}

  ngOnInit(): void {
    this.userData = this.localStorageService.getItem('userData');
  }

  navigateToContentList(type: string): void  {
    this.localStorageService.setItem('type', type);
    this.router.navigate(['editors/content-list']);
  }
  goBack() {
    this.router.navigate(['/users/']);
  }
}
