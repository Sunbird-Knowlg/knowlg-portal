import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SunbirdVideoPlayerModule } from '@project-sunbird/sunbird-video-player-v9';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
      SunbirdVideoPlayerModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
],
  bootstrap: [AppComponent],
})
export class AppModule {}
