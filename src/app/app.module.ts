import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorsComponent } from './editors/editors/editors.component';
import { PlayersComponent } from './players/players.component';
import { PdfComponent } from './players/pdf/pdf.component';
import { EpubComponent } from './players/epub/epub.component';
import { HomeComponent } from './home/home.component';
import { SunbirdEpubPlayerModule } from '@project-sunbird/sunbird-epub-player-v9';
import { SunbirdPdfPlayerModule } from '@project-sunbird/sunbird-pdf-player-v9';
import { InteractivePlayerComponent } from './players/interactive-player/interactive-player.component';
import { VideoComponent } from './players/video/video.component';
import { SunbirdVideoPlayerModule } from '@project-sunbird/sunbird-video-player-v9';
import { QuestionCursor, QumlLibraryModule } from '@project-sunbird/sunbird-quml-player-v9';
import { QuestionCursorImplementationService } from './services/question-cursor-implementation.service';
import { CollectionEditorComponent } from './editors/editors/collection-editor/collection-editor.component';
import { CreateresourceComponent } from './editors/editors/createresource/createresource.component';
import { CreatepdfComponent } from './editors/editors/createpdf/createpdf.component';
import { CreatevideoComponent } from './editors/editors/createvideo/createvideo.component';
import { CreateepubComponent } from './editors/editors/createepub/createepub.component';
import { CreateyoutubeComponent } from './editors/editors/createyoutube/createyoutube.component';
import { Createh5phtmlComponent } from './editors/editors/createh5phtml/createh5phtml.component';
import { ContentlistComponent } from './editors/editors/contentlist/contentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorsComponent,
    PlayersComponent,
    PdfComponent,
    EpubComponent,
    HomeComponent,
    InteractivePlayerComponent,
    VideoComponent,
    CollectionEditorComponent,
    CreateresourceComponent,
    CreatepdfComponent,
    CreatevideoComponent,
    CreateepubComponent,
    CreateyoutubeComponent,
    Createh5phtmlComponent,
    ContentlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SunbirdPdfPlayerModule,
    SunbirdEpubPlayerModule,
    SunbirdVideoPlayerModule,
    QumlLibraryModule
  ],
  providers: [{
    provide: QuestionCursor,
    useClass: QuestionCursorImplementationService
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
