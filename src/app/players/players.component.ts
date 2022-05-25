import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  constructor(private router: Router){}

  navigateToPdf(){
    this.router.navigate(['players/pdf']);
  }

  navigateToEpub(){
    this.router.navigate(['players/epub']);
  }

  navigateToEcml(){
    this.router.navigate(['players/interactive']);
  }

  navigateToVideo(){
    this.router.navigate(['players/video']);
  }

  ngOnInit(): void {
  }

}
