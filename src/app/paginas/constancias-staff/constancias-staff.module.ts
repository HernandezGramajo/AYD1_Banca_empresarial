import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConstanciasStaffPageRoutingModule } from './constancias-staff-routing.module';

import { ConstanciasStaffPage } from './constancias-staff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConstanciasStaffPageRoutingModule
  ],
  declarations: [ConstanciasStaffPage]
})
export class ConstanciasStaffPageModule {}
