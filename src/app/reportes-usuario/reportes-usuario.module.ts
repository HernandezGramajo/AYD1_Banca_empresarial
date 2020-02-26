import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportesUsuarioPageRoutingModule } from './reportes-usuario-routing.module';

import { ReportesUsuarioPage } from './reportes-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportesUsuarioPageRoutingModule
  ],
  declarations: [ReportesUsuarioPage]
})
export class ReportesUsuarioPageModule {}
