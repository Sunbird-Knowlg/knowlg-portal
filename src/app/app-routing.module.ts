import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadEditorComponent } from './editors/file-upload-editor/file-upload-editor.component';
import { HomeComponent } from './home/home.component';
import { EpubComponent } from './players/epub/epub.component';
import { InteractivePlayerComponent } from './players/interactive-player/interactive-player.component';
import { PdfComponent } from './players/pdf/pdf.component';
import { PlayersComponent } from './players/players.component';
import { VideoComponent } from './players/video/video.component';


const routes: Routes =  [
  {
    path: '', component: HomeComponent
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
  },
  {
    path: 'editors/file-upload-editor', component: FileUploadEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
