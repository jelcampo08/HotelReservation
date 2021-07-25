import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmJuniorPageRoutingModule } from './rm-junior-routing.module';

import { RmJuniorPage } from './rm-junior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmJuniorPageRoutingModule
  ],
  declarations: [RmJuniorPage]
})
export class RmJuniorPageModule {}
