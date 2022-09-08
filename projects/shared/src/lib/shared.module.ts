import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { SunbirdPdfPlayerModule } from '@project-sunbird/sunbird-pdf-player-v9';
import { PlayerComponent } from './player/player.component';
import { CommonModule } from '@angular/common';
import { ContentlistComponent } from './contentlist/contentlist.component';
@NgModule({
  declarations: [SharedComponent, PlayerComponent, ContentlistComponent],
  imports: [ SunbirdPdfPlayerModule, CommonModule
  ],
  exports: [SharedComponent, PlayerComponent, ContentlistComponent]
})
export class SharedModule { }
