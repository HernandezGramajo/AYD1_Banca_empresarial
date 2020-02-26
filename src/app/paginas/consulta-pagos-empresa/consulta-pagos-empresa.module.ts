import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaPagosEmpresaPageRoutingModule } from './consulta-pagos-empresa-routing.module';

import { ConsultaPagosEmpresaPage } from './consulta-pagos-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaPagosEmpresaPageRoutingModule
  ],
  declarations: [ConsultaPagosEmpresaPage]
})
export class ConsultaPagosEmpresaPageModule {}
