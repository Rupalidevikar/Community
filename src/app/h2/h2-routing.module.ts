import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { H2Page } from './h2.page';

const routes: Routes = [
  {
    path: '',
    component: H2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class H2PageRoutingModule {}
