import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadEditorComponent } from './editors/file-upload-editor/file-upload-editor.component';
import { HomeComponent } from './home/home.component';
import { EpubComponent } from './players/epub/epub.component';
import { InteractivePlayerComponent } from './players/interactive-player/interactive-player.component';
import { PdfComponent } from './players/pdf/pdf.component';
import { PlayersComponent } from './players/players.component';
import { VideoComponent } from './players/video/video.component';
import { EditorsComponent } from './editors/editors.component';
import { CollectionEditorComponent } from './editors/collection-editor/collection-editor.component';
import { ContentlistComponent } from './editors/contentlist/contentlist.component';
import { InteractiveEditorComponent } from './editors/interactive-editor/interactive-editor.component';

const routes: Routes =  [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'editors', component: EditorsComponent,
  },
  {
    path: 'editors/content-list', component: ContentlistComponent,
  },
  {
    path: 'editors/collection-editor', component: CollectionEditorComponent,
  },
  {
    path: 'editors/file-upload-editor', component: FileUploadEditorComponent,
  },
  {
    path: 'editors/interactive-editor', component: InteractiveEditorComponent,
  },
  {
    path: 'players', component: PlayersComponent,
  },
  {
    path: 'players/pdf', component: PdfComponent,
  },
  {
    path: 'players/epub', component: EpubComponent,
  },
  {
    path: 'players/interactive', component: InteractivePlayerComponent,
  },
  {
    path: 'players/video', component: VideoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
