import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmPoolPageRoutingModule } from './rm-pool-routing.module';

import { RmPoolPage } from './rm-pool.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmPoolPageRoutingModule
  ],
  declarations: [RmPoolPage]
})
export class RmPoolPageModule {}
