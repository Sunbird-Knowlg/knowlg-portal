import { NgModule } from '@angular/core';
import { SharedcomponentsComponent } from './sharedcomponents.component';
import { PdfplayerComponent } from './pdfplayer/pdfplayer.component';
import { SunbirdPdfPlayerModule } from '@project-sunbird/sunbird-pdf-player-v9';
@NgModule({
  declarations: [SharedcomponentsComponent, PdfplayerComponent],
  imports: [ SunbirdPdfPlayerModule
  ],
  exports: [SharedcomponentsComponent, PdfplayerComponent]
})
export class SharedcomponentsModule { }
