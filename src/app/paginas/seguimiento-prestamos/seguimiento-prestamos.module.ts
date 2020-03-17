import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguimientoPrestamosPageRoutingModule } from './seguimiento-prestamos-routing.module';

import { SeguimientoPrestamosPage } from './seguimiento-prestamos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguimientoPrestamosPageRoutingModule
  ],
  declarations: [SeguimientoPrestamosPage]
})
export class SeguimientoPrestamosPageModule {}
