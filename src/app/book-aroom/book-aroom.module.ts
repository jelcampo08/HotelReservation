import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookAroomPageRoutingModule } from './book-aroom-routing.module';

import { BookAroomPage } from './book-aroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookAroomPageRoutingModule
  ],
  declarations: [BookAroomPage]
})
export class BookAroomPageModule {}
