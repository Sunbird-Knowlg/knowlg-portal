import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerPageRoutingModule } from './player-routing.module';
import { SharedModule } from 'shared';
import { PlayerPage } from './player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PlayerPageRoutingModule
  ],
  declarations: [PlayerPage]
})
export class PlayerPageModule {}
