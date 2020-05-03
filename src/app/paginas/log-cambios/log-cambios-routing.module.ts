import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogCambiosPage } from './log-cambios.page';

const routes: Routes = [
  {
    path: '',
    component: LogCambiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogCambiosPageRoutingModule {}
