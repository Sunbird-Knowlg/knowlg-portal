import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config/config.service';
@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit{
  playersList = [];
  constructor(private router: Router, private configService: ConfigService){}

  ngOnInit() {
    this.playersList = this.configService.getPlayersList();
  }
  navigateToContentList(type) {
    this.router.navigate([`player-content-list/${type}`]);
  }

}
