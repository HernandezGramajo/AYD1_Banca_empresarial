import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolPrestamoPage } from './sol-prestamo.page';

const routes: Routes = [
  {
    path: '',
    component: SolPrestamoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolPrestamoPageRoutingModule {}
