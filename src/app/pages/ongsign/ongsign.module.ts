import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OngsignPageRoutingModule } from './ongsign-routing.module';

import { OngsignPage } from './ongsign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OngsignPageRoutingModule
  ],
  declarations: [OngsignPage]
})
export class OngsignPageModule {}
