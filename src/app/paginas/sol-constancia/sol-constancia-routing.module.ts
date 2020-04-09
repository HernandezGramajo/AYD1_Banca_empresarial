import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolConstanciaPage } from './sol-constancia.page';

const routes: Routes = [
  {
    path: '',
    component: SolConstanciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolConstanciaPageRoutingModule {}
