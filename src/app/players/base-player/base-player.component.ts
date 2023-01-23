import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/services/config/config.service';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-base-player',
  templateUrl: './base-player.component.html',
  styleUrls: ['./base-player.component.scss']
})
export class BasePlayerComponent implements OnDestroy {

  playerConfig: any;
  isLoading = true;
  playerSettingconfig: any;
  shareEvent = 'SHARE';
  endEvent = 'END';
  private subscription: Subscription;
  private identifierChangeSubscription: Subscription;
  @Input() showPlayerOnly = false;
  @Output() share = new EventEmitter();

  constructor(public configService: ConfigService, public playerService: PlayerService) {
    this.identifierChangeSubscription = this.playerService.contentChangeObservable.subscribe( (identifier: string) => {
      this.getContentDetails(identifier);
    });
  }


  public getContentDetails(identifier: string) {
      const options: any = { params: { fields: 'mimeType,name,artifactUrl,streamingUrl' } };
      this.subscription = this.playerService.getContent(identifier, options)
      .subscribe((data) => {
        this.loadContent(data.result.content);
        this.isLoading = false;
      });
  }

  private loadContent(content: any) {
    const metaData = this.configService.getMetaData();

    for (const item in metaData) {
        if (item) {
          this.playerSettingconfig[item] = metaData[item];
        }
      }


    this.playerConfig = {
      context: this.configService.playerConfig.PLAYER_CONTEXT,
      config: this.playerSettingconfig,
      metadata: content
    };
  }

  playerEvents(event) {
    if ((event?.detail?.edata?.type || event?.edata?.type) === this.shareEvent) {
      this.share.emit(event);
    }
    if ((event?.detail?.edata?.type || event?.edata?.type) ===  this.endEvent) {
      this.configService.setMetaData(event);
    }
  }

  playerTelemetryEvents(event) {

  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
      this.identifierChangeSubscription.unsubscribe();
  }

}
