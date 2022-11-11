import { NgModule } from '@angular/core';
import { PlayerComponent } from './player/player.component';
import { CommonModule } from '@angular/common';
import { ContentlistComponent } from './contentlist/contentlist.component';
import { ContentService } from './services/content.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [ ContentlistComponent, PlayerComponent],
  imports: [CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [PlayerComponent, ContentlistComponent],
  providers: [ContentService]
})
export class SharedModule { }
