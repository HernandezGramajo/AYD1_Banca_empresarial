import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudbeneficiosEmpresaPage } from './crudbeneficios-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: CrudbeneficiosEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudbeneficiosEmpresaPageRoutingModule {}
