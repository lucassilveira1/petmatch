import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngsignPage } from './ongsign.page';

const routes: Routes = [
  {
    path: '',
    component: OngsignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngsignPageRoutingModule {}
