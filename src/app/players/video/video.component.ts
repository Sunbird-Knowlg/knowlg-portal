import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config/config.service';
import { BasePlayerComponent } from '../base-player/base-player.component';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent  extends BasePlayerComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    public configService: ConfigService,
    public playerService: PlayerService
  ) {
    super(configService, playerService);
   }
  public queryParams: any;
  sidemenuConfig: any;

  ngOnInit(): void {
    this.queryParams = this.activatedRoute.snapshot.queryParams;
    this.setConfig();
    // LoadContent
    this.getContentDetails('do_31309320735055872011111');

    // listen for changes in the route with service
  }

  setConfig(){
    this.playerSettingconfig = this.configService.getConfigData('videoConfig');
    this.sidemenuConfig = this.playerSettingconfig?.sideMenu;
  }

}

