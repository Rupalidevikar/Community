import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageNotificationPageRoutingModule } from './manage-notification-routing.module';

import { ManageNotificationPage } from './manage-notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageNotificationPageRoutingModule
  ],
  declarations: [ManageNotificationPage]
})
export class ManageNotificationPageModule {}
