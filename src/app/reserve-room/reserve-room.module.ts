import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveRoomPageRoutingModule } from './reserve-room-routing.module';

import { ReserveRoomPage } from './reserve-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveRoomPageRoutingModule
  ],
  declarations: [ReserveRoomPage]
})
export class ReserveRoomPageModule {}
