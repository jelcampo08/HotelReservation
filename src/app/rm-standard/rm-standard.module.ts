import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmStandardPageRoutingModule } from './rm-standard-routing.module';

import { RmStandardPage } from './rm-standard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmStandardPageRoutingModule
  ],
  declarations: [RmStandardPage]
})
export class RmStandardPageModule {}
