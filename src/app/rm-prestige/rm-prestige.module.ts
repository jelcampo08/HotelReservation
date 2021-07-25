import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmPrestigePageRoutingModule } from './rm-prestige-routing.module';

import { RmPrestigePage } from './rm-prestige.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmPrestigePageRoutingModule
  ],
  declarations: [RmPrestigePage]
})
export class RmPrestigePageModule {}
