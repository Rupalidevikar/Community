import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { H3PageRoutingModule } from './h3-routing.module';

import { H3Page } from './h3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    H3PageRoutingModule
  ],
  declarations: [H3Page]
})
export class H3PageModule {}
