import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeneficiosStaffPage } from './beneficios-staff.page';

const routes: Routes = [
  {
    path: '',
    component: BeneficiosStaffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeneficiosStaffPageRoutingModule {}
