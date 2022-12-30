import { NgModule } from '@angular/core';
import { PlayerComponent } from './player/player.component';
import { CommonModule } from '@angular/common';
import { ContentlistComponent } from './contentlist/contentlist.component';
import { ContentService } from './services/content.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { V1PlayerComponent } from './v1-player/v1-player.component';
@NgModule({
  declarations: [ ContentlistComponent, PlayerComponent, V1PlayerComponent],
  imports: [CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [V1PlayerComponent, PlayerComponent, ContentlistComponent],
  providers: [ContentService]
})
export class SharedModule { }
