import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerPage } from './player.page';
import { V1PlayerComponent } from './v1-player/v1-player.component';
import { V2PlayerComponent } from './v2-player/v2-player.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerPage,
  },
  {
    path: 'v2/:mimeType/:id',
    component: V2PlayerComponent
  },
  {
    path: 'v1/:mimeType/:id',
    component: V1PlayerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerPageRoutingModule {}
