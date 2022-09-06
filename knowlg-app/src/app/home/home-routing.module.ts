import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { PlayerslistComponent } from './playerslist/playerslist.component';
import { ContentlistComponent } from './contentlist/contentlist.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'playersList',
    component: PlayerslistComponent,
  },
  {
    path: 'contentList/:playerType',
    component: ContentlistComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
