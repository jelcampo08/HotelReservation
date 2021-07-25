import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmTwinPage } from './rm-twin.page';

const routes: Routes = [
  {
    path: '',
    component: RmTwinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmTwinPageRoutingModule {}
