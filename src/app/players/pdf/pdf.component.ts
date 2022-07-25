import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/services/helper/helper.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { BasePlayerComponent } from '../base-player/base-player.component';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent extends BasePlayerComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private helperService: HelperService,
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
    this.getContentDetails('do_11348995249825382411');
  }

  setConfig(){
    this.playerSettingconfig = this.configService.getConfigData('pdfConfig');
    this.sidemenuConfig = this.playerSettingconfig?.sideMenu;
  }

}
