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
//mover a consultar informacion de usuario
  move2info(){
    this.navCtrl.navigateForward(["/info-usuario",this.id,this.user,this.type]);
  }
//moverse a pagina de crud
  move2crud(){
    this.navCtrl.navigateForward(["/crudusuarios",this.id,this.user,this.type]);
  }

  //aun esta pendiente que el resto de equipos finalicen sus paginas para poder enlazarlas y dimensionar los botones.
  //moverse a consultar pagos de usuario
  move2checkpay(){
    this.navCtrl.navigateForward(["/reportes-usuario",this.id,this.user,this.type]);
  }
  //moverse a STAFF - Pago de nomina
  move2staffpay(){
    this.navCtrl.navigateForward(["/pago-nomina",this.id,this.user,this.type]);
  }
  // moverse a STAFF - consultar historial de pagos
  move2staffcheckpay(){
    this.navCtrl.navigateForward(["/consulta-pagos-empresa",this.id,this.user,this.type]);
  }

  // moverse a seguimiento de prestamos
  move2checkloans(){
    this.navCtrl.navigateForward(["/seguimiento-prestamos",this.id,this.user,this.type]);
  }

  move2checkbenefits(){
    this.navCtrl.navigateForward(["/beneficios-staff",this.id,this.user,this.type]);
  }

  move2adminbenefits(){
    this.navCtrl.navigateForward(["/crudbeneficios-empresa",this.id,this.user,this.type]);
  }

  //moverse a administracion de prestamos

  move2adminloans(){
    this.navCtrl.navigateForward(["/manejo-prestamo",this.id,this.user,this.type]);
  }

  //moverse a login
  move2login(){
    this.id =null
    this.user =null
    this.type =null
    this.navCtrl.navigateForward(["/login"]);
  }

  //moverse a solicitud de prestamos

  move2solprestamo(){
    this.navCtrl.navigateForward(["/sol-prestamo",this.id,this.user,this.type]);
  }

  /*
  mover_Consulta_Empresa(){
    this.navCtrl.navigateForward(["/consulta-pagos-empresa",this.id,this.user,this.type]);
  }*/
}
