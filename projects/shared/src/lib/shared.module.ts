import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { SunbirdPdfPlayerModule } from '@project-sunbird/sunbird-pdf-player-v9';
import { PlayerComponent } from './player/player.component';
import { CommonModule } from '@angular/common';
import { ContentlistComponent } from './contentlist/contentlist.component';
import { SunbirdEpubPlayerModule } from '@project-sunbird/sunbird-epub-player-v9';
import { QuestionCursor } from '@project-sunbird/sunbird-quml-player-v9';
import { QuestionCursorImplementationService } from './question-cursor-implementation.service';
import { SunbirdVideoPlayerModule } from '@project-sunbird/sunbird-video-player-v9';
@NgModule({
  declarations: [SharedComponent, ContentlistComponent, PlayerComponent],
  imports: [ SunbirdPdfPlayerModule, SunbirdEpubPlayerModule, SunbirdVideoPlayerModule, CommonModule
  ],
  providers: [{ provide: QuestionCursor, useClass: QuestionCursorImplementationService }],
  exports: [SharedComponent, PlayerComponent, ContentlistComponent]
})
export class SharedModule { }
