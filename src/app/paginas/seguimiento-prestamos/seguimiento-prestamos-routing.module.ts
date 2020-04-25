import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguimientoPrestamosPage } from './seguimiento-prestamos.page';

const routes: Routes = [
  {
    path: '',
    component: SeguimientoPrestamosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguimientoPrestamosPageRoutingModule {}
