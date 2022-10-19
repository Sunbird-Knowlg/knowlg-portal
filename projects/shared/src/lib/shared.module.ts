import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { PlayerComponent } from './player/player.component';
import { CommonModule } from '@angular/common';
import { ContentlistComponent } from './contentlist/contentlist.component';
import { SunbirdEpubPlayerModule } from '@project-sunbird/sunbird-epub-player-v9';
import { SunbirdVideoPlayerModule } from '@project-sunbird/sunbird-video-player-v9';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [SharedComponent, ContentlistComponent, PlayerComponent],
  imports: [ SunbirdEpubPlayerModule, SunbirdVideoPlayerModule, CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [SharedComponent, PlayerComponent, ContentlistComponent]
})
export class SharedModule { }
