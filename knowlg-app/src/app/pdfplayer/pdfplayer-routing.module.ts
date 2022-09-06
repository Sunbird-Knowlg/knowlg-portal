import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfplayerPage } from './pdfplayer.page';

const routes: Routes = [
  {
    path: '',
    component: PdfplayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfplayerPageRoutingModule {}
