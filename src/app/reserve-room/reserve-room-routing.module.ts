import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveRoomPage } from './reserve-room.page';

const routes: Routes = [
  {
    path: '',
    component: ReserveRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserveRoomPageRoutingModule {}
