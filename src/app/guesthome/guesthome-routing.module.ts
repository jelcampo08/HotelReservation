import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuesthomePage } from './guesthome.page';

const routes: Routes = [
  {
    path: '',
    component: GuesthomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuesthomePageRoutingModule {}
