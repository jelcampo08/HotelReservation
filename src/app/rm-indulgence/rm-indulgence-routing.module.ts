import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmIndulgencePage } from './rm-indulgence.page';

const routes: Routes = [
  {
    path: '',
    component: RmIndulgencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmIndulgencePageRoutingModule {}
