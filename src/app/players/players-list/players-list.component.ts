import { Component,  } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/user/localstorage.service';
@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent {


  constructor(private router: Router, private localStorageService: LocalStorageService){}

  navigateToPdf(){
    this.localStorageService.setItem('type', 'pdf');
    this.router.navigate(['players/playercontentlist']);
  }

  navigateToEpub(){
    this.localStorageService.setItem('type', 'epub');
    this.router.navigate(['players/playercontentlist']);
  }

  navigateToEcml(){
    this.localStorageService.setItem('type', 'ecml');
    this.router.navigate(['players/playercontentlist']);
  }

  navigateToVideo(){
    this.localStorageService.setItem('type', 'video');
    this.router.navigate(['players/playercontentlist']);
  }

  naviagteToCollectionPlayer(){
    this.router.navigate(['players/collection']);
  }

}
