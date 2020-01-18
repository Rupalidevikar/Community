import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountSettingPageRoutingModule } from './account-setting-routing.module';

import { AccountSettingPage } from './account-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AccountSettingPageRoutingModule
  ],
  declarations: [AccountSettingPage]
})
export class AccountSettingPageModule {}
