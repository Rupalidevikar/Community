import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminHomePageRoutingModule } from './admin-home-routing.module';

import { AdminHomePage } from './admin-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdminHomePageRoutingModule
  ],
  declarations: [AdminHomePage]
})
export class AdminHomePageModule {}
