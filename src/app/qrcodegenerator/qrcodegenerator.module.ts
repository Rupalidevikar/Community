import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrcodegeneratorPageRoutingModule } from './qrcodegenerator-routing.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { QrcodegeneratorPage } from './qrcodegenerator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxQRCodeModule,
    IonicModule,
    QrcodegeneratorPageRoutingModule
  ],
  declarations: [QrcodegeneratorPage]
})
export class QrcodegeneratorPageModule {}
