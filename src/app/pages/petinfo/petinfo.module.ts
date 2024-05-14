import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetinfoPageRoutingModule } from './petinfo-routing.module';

import { PetinfoPage } from './petinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetinfoPageRoutingModule
  ],
  declarations: [PetinfoPage]
})
export class PetinfoPageModule {}
