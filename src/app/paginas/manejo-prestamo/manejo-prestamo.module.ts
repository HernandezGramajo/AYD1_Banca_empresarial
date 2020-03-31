import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManejoPrestamoPageRoutingModule } from './manejo-prestamo-routing.module';

import { ManejoPrestamoPage } from './manejo-prestamo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManejoPrestamoPageRoutingModule
  ],
  declarations: [ManejoPrestamoPage]
})
export class ManejoPrestamoPageModule {}
