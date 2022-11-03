import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import { PlayerService } from 'src/app/services/player/player.service';
import { ActivatedRoute } from '@angular/router';
import { BasePlayerComponent } from './base-player/base-player.component';
import * as _ from 'lodash-es';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent extends BasePlayerComponent implements OnInit {
  public queryParams: any;
  sidemenuConfig: any;
  configType: any;
  constructor(private activatedRoute: ActivatedRoute,
              public configService: ConfigService,
              public playerService: PlayerService) {
    super(configService, playerService);
  }

  ngOnInit(): void {
    this.queryParams = this.activatedRoute.snapshot.queryParams;
    if (_.get(this.activatedRoute.snapshot, 'params.mimeType') === 'pdf') {
      this.configType = 'pdfConfig';
    } else if (_.get(this.activatedRoute.snapshot, 'params.mimeType') === 'epub') {
      this.configType = 'epubConfig';
    } else if (_.get(this.activatedRoute.snapshot, 'params.mimeType') === 'video') {
      this.configType = 'videoConfig';
    }
    // LoadContent
    this.getContentDetails(_.get(this.activatedRoute.snapshot, 'params.id'));
    this.setConfig();
  }

  setConfig() {
    this.playerSettingconfig = this.configService.getConfigData(this.configType);
    this.sidemenuConfig = this.playerSettingconfig?.sideMenu;
  }
}
