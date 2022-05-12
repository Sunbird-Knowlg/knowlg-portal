import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorsComponent } from './editors/editors.component';
import { FileUploadEditorComponent } from './editors/file-upload-editor/file-upload-editor.component';
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
@NgModule({
  declarations: [
    AppComponent,
    EditorsComponent,
    FileUploadEditorComponent,
    PlayersComponent,
    PdfComponent,
    EpubComponent,
    HomeComponent,
    InteractivePlayerComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
