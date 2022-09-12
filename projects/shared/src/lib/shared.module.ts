import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { SunbirdPdfPlayerModule } from '@project-sunbird/sunbird-pdf-player-v9';
import { PlayerComponent } from './player/player.component';
import { CommonModule } from '@angular/common';
import { ContentlistComponent } from './contentlist/contentlist.component';
import { SunbirdEpubPlayerModule } from '@project-sunbird/sunbird-epub-player-v9';
@NgModule({
  declarations: [SharedComponent, PlayerComponent, ContentlistComponent],
  imports: [ SunbirdPdfPlayerModule, SunbirdEpubPlayerModule, CommonModule
  ],
  exports: [SharedComponent, PlayerComponent, ContentlistComponent]
})
export class SharedModule { }
