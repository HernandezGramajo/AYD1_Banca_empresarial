import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManejoPrestamoPage } from './manejo-prestamo.page';

const routes: Routes = [
  {
    path: '',
    component: ManejoPrestamoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManejoPrestamoPageRoutingModule {}
