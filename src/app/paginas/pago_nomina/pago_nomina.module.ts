import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoNominaPageRoutingModule } from './pago_nomina-routing.module';

import { PagoNominaPage } from './pago_nomina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoNominaPageRoutingModule,
  ],
  declarations: [CrudusuariosPage]
})
export class PagoNominaPageModule {}
