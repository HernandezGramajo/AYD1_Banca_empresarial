import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit {

  id =null
  user =null
  type =null

  constructor(private activeRoute: ActivatedRoute, public navCtrl: NavController) { }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');
    console.log(this.id,this.user,this.type);
  }

  move2info(){
    this.navCtrl.navigateForward(["/info-usuario",this.id,this.user,this.type]);
  }

  move2crud(){
    this.navCtrl.navigateForward(["/crudusuarios",this.id,this.user,this.type]);
  }
  
  move2login(){
    this.id =null
    this.user =null
    this.type =null
    this.navCtrl.navigateForward(["/login"]);
  }
  mover_Consulta_Empresa(){
    this.navCtrl.navigateForward("/consulta-pagos-empresa");
  }
}
