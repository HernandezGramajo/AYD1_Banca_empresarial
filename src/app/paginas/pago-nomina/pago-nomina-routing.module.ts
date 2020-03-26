import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoNominaPage } from './pago-nomina.page';

const routes: Routes = [
  {
    path: '',
    component: PagoNominaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoNominaPageRoutingModule {}
