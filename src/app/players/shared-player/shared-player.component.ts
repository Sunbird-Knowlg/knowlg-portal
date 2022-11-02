import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import { BasePlayerComponent } from '../base-player/base-player.component';
import { PlayerService } from 'src/app/services/player/player.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shared-player',
  templateUrl: './shared-player.component.html',
  styleUrls: ['./shared-player.component.scss']
})
export class SharedPlayerComponent extends BasePlayerComponent implements OnInit {
  public queryParams: any;
  sidemenuConfig: any;
  constructor(  private activatedRoute: ActivatedRoute,
       public configService: ConfigService,
    public playerService: PlayerService) 
  { 
    super(configService, playerService);
   }

   ngOnInit(): void {
    this.queryParams = this.activatedRoute.snapshot.queryParams;
    this.setConfig();
    console.log(this.queryParams, 'queryParams');
    // LoadContent
      this.getContentDetails('do_11348995249825382411');
  }

  setConfig(){
    this.playerSettingconfig = this.configService.getConfigData('pdfConfig');
    this.sidemenuConfig = this.playerSettingconfig?.sideMenu;
  }
}
