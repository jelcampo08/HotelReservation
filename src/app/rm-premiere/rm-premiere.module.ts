import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmPremierePageRoutingModule } from './rm-premiere-routing.module';

import { RmPremierePage } from './rm-premiere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmPremierePageRoutingModule
  ],
  declarations: [RmPremierePage]
})
export class RmPremierePageModule {}
