import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorsComponent } from './editors/editors.component';
import { FileUploadEditorComponent } from './editors/file-upload-editor/file-upload-editor.component';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './home/home.component';
import { SunbirdEpubPlayerModule } from '@project-sunbird/sunbird-epub-player-v9';
import { InteractivePlayerComponent } from './players/interactive-player/interactive-player.component';
import { SunbirdVideoPlayerModule } from '@project-sunbird/sunbird-video-player-v9';
import { QuestionCursor, QumlLibraryModule } from '@project-sunbird/sunbird-quml-player-v9';
import { QuestionCursorImplementationService } from './services/question-cursor-implementation.service';
import { CollectionEditorComponent } from './editors/collection-editor/collection-editor.component';
import { ContentlistComponent } from './editors/contentlist/contentlist.component';
import { HelperService } from './services/helper/helper.service';
import { CollectionEditorLibraryModule } from '@project-sunbird/sunbird-collection-editor';
import { UserComponent } from './editors/user/user.component';
import { RoleComponent } from './editors/role/role.component';
import { FormsModule } from '@angular/forms';
import { SnPopupComponent } from './sn-popup/sn-popup.component';
import { SidebarComponent } from './players/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SessionInterceptor } from './interceptor/sessionInterceptor';
import { CollectionPlayerComponent } from './players/collection-player/collection-player.component';
import { CommonConsumptionModule} from '@project-sunbird/common-consumption-v9';
import { CollectionDetailsModelComponent } from './players/collection-player/collection-details-model/collection-details-model.component';
import {MatListModule} from '@angular/material/list';
import { ContentDetailsModelComponent } from './players/collection-player/content-details-model/content-details-model.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HeaderComponent } from './players/header/header.component';
import { PublishedPopupComponent } from './players/published-popup/published-popup.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { SharedModule } from 'shared';
@NgModule({
  declarations: [
    AppComponent,
    EditorsComponent,
    FileUploadEditorComponent,
    PlayersComponent,
    HomeComponent,
    InteractivePlayerComponent,
    CollectionEditorComponent,
    ContentlistComponent,
    UserComponent,
    RoleComponent,
    SnPopupComponent,
    SidebarComponent,
    CollectionPlayerComponent,
    CollectionDetailsModelComponent,
    ContentDetailsModelComponent,
    HeaderComponent,
    PublishedPopupComponent,
    PlayersListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SunbirdEpubPlayerModule,
    SunbirdVideoPlayerModule,
    QumlLibraryModule,
    CollectionEditorLibraryModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSidenavModule,
    CommonConsumptionModule,
    MatListModule,
    MatPaginatorModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: QuestionCursor,
    useClass: QuestionCursorImplementationService,
  },
  { provide: HTTP_INTERCEPTORS, useClass: SessionInterceptor, multi: true },
    HelperService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
