import { NgModule } from '@angular/core';
import { SharedcomponentsComponent } from './sharedcomponents.component';
import { SunbirdPdfPlayerModule } from '@project-sunbird/sunbird-pdf-player-v9';
import { PlayerComponent } from './player/player.component';
import { CommonModule } from '@angular/common';
import { ContentlistComponent } from './contentlist/contentlist.component';
@NgModule({
  declarations: [SharedcomponentsComponent, PlayerComponent, ContentlistComponent],
  imports: [ SunbirdPdfPlayerModule, CommonModule
  ],
  exports: [SharedcomponentsComponent, PlayerComponent, ContentlistComponent]
})
export class SharedcomponentsModule { }
