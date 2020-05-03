import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogCambiosPageRoutingModule } from './log-cambios-routing.module';

import { LogCambiosPage } from './log-cambios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogCambiosPageRoutingModule
  ],
  declarations: [LogCambiosPage]
})
export class LogCambiosPageModule {}
