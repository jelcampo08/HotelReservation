import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuesthomePageRoutingModule } from './guesthome-routing.module';

import { GuesthomePage } from './guesthome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuesthomePageRoutingModule
  ],
  declarations: [GuesthomePage]
})
export class GuesthomePageModule {}
