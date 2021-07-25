import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmPoolPage } from './rm-pool.page';

const routes: Routes = [
  {
    path: '',
    component: RmPoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmPoolPageRoutingModule {}
