import { Component, OnInit } from '@angular/core';

import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../../servicios/api.service';
@Component({
  selector: 'app-constancias-staff',
  templateUrl: './constancias-staff.page.html',
  styleUrls: ['./constancias-staff.page.scss'],
})
export class ConstanciasStaffPage implements OnInit {

  id =null
  user =null
  type =null

  constructor(private apiService : ApiService,private activeRoute: ActivatedRoute, public navCtrl: NavController) { }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');
   
  }
  atras(){

    this.navCtrl.navigateForward(["/staff",this.id,this.user,this.type]);
  }
}
