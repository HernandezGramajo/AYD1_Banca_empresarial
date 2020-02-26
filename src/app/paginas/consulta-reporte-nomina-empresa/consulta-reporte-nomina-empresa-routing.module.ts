import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaReporteNominaEmpresaPage } from './consulta-reporte-nomina-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaReporteNominaEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaReporteNominaEmpresaPageRoutingModule {}
