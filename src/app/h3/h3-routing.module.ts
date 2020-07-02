import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { H3Page } from './h3.page';

const routes: Routes = [
  {
    path: '',
    component: H3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class H3PageRoutingModule {}
