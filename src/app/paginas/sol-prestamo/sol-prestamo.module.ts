import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolPrestamoPageRoutingModule } from './sol-prestamo-routing.module';

import { SolPrestamoPage } from './sol-prestamo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolPrestamoPageRoutingModule
  ],
  declarations: [SolPrestamoPage]
})
export class SolPrestamoPageModule {}
