import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmIndulgencePageRoutingModule } from './rm-indulgence-routing.module';

import { RmIndulgencePage } from './rm-indulgence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmIndulgencePageRoutingModule
  ],
  declarations: [RmIndulgencePage]
})
export class RmIndulgencePageModule {}
