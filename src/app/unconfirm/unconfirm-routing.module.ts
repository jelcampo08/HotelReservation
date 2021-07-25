import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnconfirmPage } from './unconfirm.page';

const routes: Routes = [
  {
    path: '',
    component: UnconfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnconfirmPageRoutingModule {}
