import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmTwinPageRoutingModule } from './rm-twin-routing.module';

import { RmTwinPage } from './rm-twin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmTwinPageRoutingModule
  ],
  declarations: [RmTwinPage]
})
export class RmTwinPageModule {}
