import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolConstanciaPageRoutingModule } from './sol-constancia-routing.module';

import { SolConstanciaPage } from './sol-constancia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolConstanciaPageRoutingModule
  ],
  declarations: [SolConstanciaPage]
})
export class SolConstanciaPageModule {}
