import { Component } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PopoverPage} from '../popover/popover.page'
@Component({
  selector: 'app-beneficios-staff',
  templateUrl: './beneficios-staff.page.html',
  styleUrls: ['./beneficios-staff.page.scss'],
})
export class BeneficiosStaffPage {

  constructor(private popover:PopoverController) {


   }
  
  CreatePopOver()
  {
    this.popover.create({component:PopoverPage,showBackdrop:false}).then((popoverElement)=>{
      popoverElement.present();
    })}
  }
  


