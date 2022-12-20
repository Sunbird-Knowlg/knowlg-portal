import { Component,  } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config/config.service';
@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent {
  playersList = [];
  constructor(private router: Router, private configService: ConfigService){}

  ngOnInit() {
    this.playersList = this.configService.getPlayersList();
  }
  navigateToContentList(type) {
    this.router.navigateByUrl('player-content-list/' + type);
  }

}
