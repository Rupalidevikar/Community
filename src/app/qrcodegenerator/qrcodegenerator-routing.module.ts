import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrcodegeneratorPage } from './qrcodegenerator.page';

const routes: Routes = [
  {
    path: '',
    component: QrcodegeneratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrcodegeneratorPageRoutingModule {}
