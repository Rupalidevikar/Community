import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UR1PageRoutingModule } from './ur1-routing.module';

import { UR1Page } from './ur1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UR1PageRoutingModule
  ],
  declarations: [UR1Page]
})
export class UR1PageModule {}
