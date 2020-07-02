import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UR1Page } from './ur1.page';

const routes: Routes = [
  {
    path: '',
    component: UR1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UR1PageRoutingModule {}
