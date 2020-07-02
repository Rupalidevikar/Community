import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComregistrationPage } from './comregistration.page';

const routes: Routes = [
  {
    path: '',
    component: ComregistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComregistrationPageRoutingModule {}
