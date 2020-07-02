import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { H1PageRoutingModule } from './h1-routing.module';

import { H1Page } from './h1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    H1PageRoutingModule
  ],
  declarations: [H1Page]
})
export class H1PageModule {}
