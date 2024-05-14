import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetinfoPage } from './petinfo.page';

const routes: Routes = [
  {
    path: '',
    component: PetinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetinfoPageRoutingModule {}
