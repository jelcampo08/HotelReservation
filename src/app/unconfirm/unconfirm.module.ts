import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnconfirmPageRoutingModule } from './unconfirm-routing.module';

import { UnconfirmPage } from './unconfirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnconfirmPageRoutingModule
  ],
  declarations: [UnconfirmPage]
})
export class UnconfirmPageModule {}
