import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/services/helper/helper.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { BasePlayerComponent } from '../base-player/base-player.component';
import { PlayerService } from 'src/app/services/player/player.service';
@Component({
  selector: 'app-epub',
  templateUrl: './epub.component.html',
  styleUrls: ['./epub.component.scss']
})
export class EpubComponent extends BasePlayerComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    public configService: ConfigService,
    public playerService: PlayerService
  ) {
    super(configService, playerService)
   }
  public queryParams: any;
  sidemenuConfig: any;

  ngOnInit(): void {
    this.queryParams = this.activatedRoute.snapshot.queryParams;
    this.setConfig();
    // LoadContent
    this.getContentDetails("do_21312960731822489612047");

    // listen for changes in the route with service
  }

  setConfig(){
    this.playerSettingconfig = this.configService.getConfigData('epubConfig');
    this.sidemenuConfig = this.playerSettingconfig?.sideMenu;
  }

}
