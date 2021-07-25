import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmStandardPage } from './rm-standard.page';

const routes: Routes = [
  {
    path: '',
    component: RmStandardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmStandardPageRoutingModule {}
