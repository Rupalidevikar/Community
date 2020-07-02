import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UR2PageRoutingModule } from './ur2-routing.module';

import { UR2Page } from './ur2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UR2PageRoutingModule
  ],
  declarations: [UR2Page]
})
export class UR2PageModule {}
