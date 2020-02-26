import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaReporteNominaEmpresaPageRoutingModule } from './consulta-reporte-nomina-empresa-routing.module';

import { ConsultaReporteNominaEmpresaPage } from './consulta-reporte-nomina-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaReporteNominaEmpresaPageRoutingModule
  ],
  declarations: [ConsultaReporteNominaEmpresaPage]
})
export class ConsultaReporteNominaEmpresaPageModule {}
