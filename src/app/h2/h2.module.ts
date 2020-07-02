import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { H2PageRoutingModule } from './h2-routing.module';

import { H2Page } from './h2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    H2PageRoutingModule
  ],
  declarations: [H2Page]
})
export class H2PageModule {}
