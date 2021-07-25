import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmPremierePage } from './rm-premiere.page';

const routes: Routes = [
  {
    path: '',
    component: RmPremierePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmPremierePageRoutingModule {}
