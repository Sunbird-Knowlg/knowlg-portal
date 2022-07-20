import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/services/helper/helper.service';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-base-player',
  templateUrl: './base-player.component.html',
  styleUrls: ['./base-player.component.scss']
})
export class BasePlayerComponent  {

  playerConfig: any;
  isLoading = true;


  constructor(
    private activatedRoute: ActivatedRoute,
    private helperService: HelperService,
    private configService: ConfigService
  ) { }




}
