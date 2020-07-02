import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { H1Page } from './h1.page';

const routes: Routes = [
  {
    path: '',
    component: H1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class H1PageRoutingModule {}
