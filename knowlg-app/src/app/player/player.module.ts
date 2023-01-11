import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerPageRoutingModule } from './player-routing.module';
import { SharedModule } from 'shared';
import { PlayerPage } from './player.page';
import { V1PlayerComponent } from './v1-player/v1-player.component';
import { V2PlayerComponent } from './v2-player/v2-player.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PlayerPageRoutingModule
  ],
  declarations: [PlayerPage, V1PlayerComponent, V2PlayerComponent]
})
export class PlayerPageModule {}
