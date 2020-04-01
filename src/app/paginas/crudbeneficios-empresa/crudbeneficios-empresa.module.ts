import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudbeneficiosEmpresaPageRoutingModule } from './crudbeneficios-empresa-routing.module';

import { CrudbeneficiosEmpresaPage } from './crudbeneficios-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudbeneficiosEmpresaPageRoutingModule
  ],
  declarations: [CrudbeneficiosEmpresaPage]
})
export class CrudbeneficiosEmpresaPageModule {}
