import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmiHome2PageRoutingModule } from './admi-home2-routing.module';

import { AdmiHome2Page } from './admi-home2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmiHome2PageRoutingModule
  ],
  declarations: [AdmiHome2Page]
})
export class AdmiHome2PageModule {}
