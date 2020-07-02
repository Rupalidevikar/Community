import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComregistrationPageRoutingModule } from './comregistration-routing.module';

import { ComregistrationPage } from './comregistration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComregistrationPageRoutingModule
  ],
  declarations: [ComregistrationPage]
})
export class ComregistrationPageModule {}
