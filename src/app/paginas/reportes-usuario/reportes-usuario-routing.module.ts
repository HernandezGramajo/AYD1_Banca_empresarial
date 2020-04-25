import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportesUsuarioPage } from './reportes-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ReportesUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportesUsuarioPageRoutingModule {}
