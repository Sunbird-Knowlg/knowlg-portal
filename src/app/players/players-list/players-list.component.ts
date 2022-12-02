import { Component,  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent {


  constructor(private router: Router){}

  navigateToPdf(){
    this.router.navigate(['players/pdf/do_11348995249825382411']);
  }

  navigateToEpub(){
    this.router.navigate(['players/epub/do_21312960731822489612047']);
  }

  navigateToEcml(){
    this.router.navigate(['players/interactive']);
  }

  navigateToVideo(){
    this.router.navigate(['players/video/do_31309320735055872011111']);
  }

  naviagteToCollectionPlayer(){
    this.router.navigate(['players/collection']);
  }

}
