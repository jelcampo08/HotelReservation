import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmJuniorPage } from './rm-junior.page';

const routes: Routes = [
  {
    path: '',
    component: RmJuniorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmJuniorPageRoutingModule {}
