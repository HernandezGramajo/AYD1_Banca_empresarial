import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeneficiosStaffPageRoutingModule } from './beneficios-staff-routing.module';

import {PopoverPageModule} from '../popover/popover.module'
import { BeneficiosStaffPage } from './beneficios-staff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeneficiosStaffPageRoutingModule,
    PopoverPageModule
  ],
  declarations: [BeneficiosStaffPage]
})
export class BeneficiosStaffPageModule {}
