import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePassPageRoutingModule } from './create-pass-routing.module';

import { CreatePassPage } from './create-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreatePassPageRoutingModule
  ],
  declarations: [CreatePassPage]
})
export class CreatePassPageModule {}
