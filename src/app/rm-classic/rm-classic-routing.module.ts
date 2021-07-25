import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmClassicPage } from './rm-classic.page';

const routes: Routes = [
  {
    path: '',
    component: RmClassicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmClassicPageRoutingModule {}
