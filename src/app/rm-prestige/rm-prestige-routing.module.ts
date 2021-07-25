import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmPrestigePage } from './rm-prestige.page';

const routes: Routes = [
  {
    path: '',
    component: RmPrestigePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmPrestigePageRoutingModule {}
