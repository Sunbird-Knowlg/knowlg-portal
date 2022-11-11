import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PlayerslistComponent } from './playerslist/playerslist.component';
import { ContentlistComponent } from './contentlist/contentlist.component';
import { SharedModule } from 'shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HomePageRoutingModule
  ],
  providers: [],
  declarations: [HomePage, PlayerslistComponent, ContentlistComponent]
})
export class HomePageModule {}
