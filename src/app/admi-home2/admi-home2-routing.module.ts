import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmiHome2Page } from './admi-home2.page';

const routes: Routes = [
  {
    path: '',
    component: AdmiHome2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmiHome2PageRoutingModule {}
