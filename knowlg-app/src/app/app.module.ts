import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SunbirdPdfPlayerModule } from '@project-sunbird/sunbird-pdf-player-v9';
import { SunbirdEpubPlayerModule } from '@project-sunbird/sunbird-epub-player-v9';
import { QuestionCursor } from '@project-sunbird/sunbird-quml-player-v9';
import { QuestionCursorImplementationService } from './question-cursor-implementation.service';
import { SunbirdVideoPlayerModule } from '@project-sunbird/sunbird-video-player-v9';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SunbirdPdfPlayerModule,
     SunbirdEpubPlayerModule, SunbirdVideoPlayerModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
   { provide: QuestionCursor,
    useClass: QuestionCursorImplementationService,
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
