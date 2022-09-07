import { NgModule } from '@angular/core';
import { SharedcomponentsComponent } from './sharedcomponents.component';
import { SunbirdPdfPlayerModule } from '@project-sunbird/sunbird-pdf-player-v9';
import { PlayerComponent } from './player/player.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [SharedcomponentsComponent, PlayerComponent],
  imports: [ SunbirdPdfPlayerModule, CommonModule
  ],
  exports: [SharedcomponentsComponent, PlayerComponent]
})
export class SharedcomponentsModule { }
