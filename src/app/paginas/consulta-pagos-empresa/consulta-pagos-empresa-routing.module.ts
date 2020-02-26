import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaPagosEmpresaPage } from './consulta-pagos-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaPagosEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaPagosEmpresaPageRoutingModule {}
