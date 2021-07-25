import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmClassicPageRoutingModule } from './rm-classic-routing.module';

import { RmClassicPage } from './rm-classic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmClassicPageRoutingModule
  ],
  declarations: [RmClassicPage]
})
export class RmClassicPageModule {}
