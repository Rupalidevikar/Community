import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminRegisterPageRoutingModule } from './admin-register-routing.module';

import { AdminRegisterPage } from './admin-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminRegisterPageRoutingModule
  ],
  declarations: [AdminRegisterPage]
})
export class AdminRegisterPageModule {}
