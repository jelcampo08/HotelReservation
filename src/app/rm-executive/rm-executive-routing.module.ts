import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmExecutivePage } from './rm-executive.page';

const routes: Routes = [
  {
    path: '',
    component: RmExecutivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmExecutivePageRoutingModule {}
