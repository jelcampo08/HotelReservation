import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmExecutivePageRoutingModule } from './rm-executive-routing.module';

import { RmExecutivePage } from './rm-executive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmExecutivePageRoutingModule
  ],
  declarations: [RmExecutivePage]
})
export class RmExecutivePageModule {}
