import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfplayerPageRoutingModule } from './pdfplayer-routing.module';

import { PdfplayerPage } from './pdfplayer.page';
import { SharedModule } from 'shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PdfplayerPageRoutingModule
  ],
  declarations: [PdfplayerPage]
})
export class PdfplayerPageModule {}
