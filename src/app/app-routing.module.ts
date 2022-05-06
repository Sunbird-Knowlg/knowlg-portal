import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EpubComponent } from './players/epub/epub.component';
import { InteractivePlayerComponent } from './players/interactive-player/interactive-player.component';
import { PdfComponent } from './players/pdf/pdf.component';
import { PlayersComponent } from './players/players.component';
import { VideoComponent } from './players/video/video.component';
import { EditorsComponent } from './editors/editors/editors.component';
import { CollectionEditorComponent } from './editors/editors/collection-editor/collection-editor.component';
import { CreatepdfComponent } from './editors/editors/createpdf/createpdf.component';
import { CreatevideoComponent } from './editors/editors/createvideo/createvideo.component';
import { CreateepubComponent } from './editors/editors/createepub/createepub.component';
import { CreateyoutubeComponent } from './editors/editors/createyoutube/createyoutube.component';
import { CreateresourceComponent } from './editors/editors/createresource/createresource.component';
import { Createh5phtmlComponent } from './editors/editors/createh5phtml/createh5phtml.component';
import { ContentlistComponent } from './editors/editors/contentlist/contentlist.component';


const routes: Routes =  [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'players', component: PlayersComponent,
  },
  {
    path: 'editors', component: EditorsComponent,
  },
  {
    path: 'editors/content-list/:page', component: ContentlistComponent,
  },
  {
    path: 'editors/collection-editor', component: CollectionEditorComponent,
  },
  {
    path: 'editors/Resources', component: CreateresourceComponent,
  },
  {
    path: 'editors/Pdf', component: CreatepdfComponent,
  },
  {
    path: 'editors/Video', component: CreatevideoComponent,
  },
  {
    path: 'editors/Epub', component: CreateepubComponent,
  },
  {
    path: 'editors/Youtube', component: CreateyoutubeComponent,
  },
  {
    path: 'editors/H5pHtml', component: Createh5phtmlComponent,
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
