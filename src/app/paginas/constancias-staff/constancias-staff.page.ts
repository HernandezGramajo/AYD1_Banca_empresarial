import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { EmpresaServicesService } from '../../servicios/empresa-services.service';
import {Constancia} from '../../modelos/constancia';
import {Usuarios} from '../../modelos/usuarios';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-constancias-staff',
  templateUrl: './constancias-staff.page.html',
  styleUrls: ['./constancias-staff.page.scss'],
})
export class ConstanciasStaffPage implements OnInit {


  result_user : Observable<Usuarios>;
  constancias : Observable <Constancia>;
  id =null
  user =null
  type =null

  constructor(private serv : EmpresaServicesService,private activeRoute: ActivatedRoute, public navCtrl: NavController) { }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');
    this.obtener_constancias();
  }

  obtener_constancias(){
    this.constancias = this.serv.Obtener_constancias();
    this.result_user = this.serv.obtenerdatos_Usuarios();
    console.log("Entro aca")
  }
  async Aceptar(constancia_aceptada){ // 1 aceptado
    const json ={
      "id_constancia": constancia_aceptada.id_constancia,
      "tipoConstancia": constancia_aceptada.tipoConstancia,
      "id_empleado": constancia_aceptada.id_empleado,
      "id_administrador": this.id,
      "estado_constancia": 1,
      "cuerpo_constancia": constancia_aceptada.cuerpo_constancia,
      "fecha_constancia": constancia_aceptada.fecha_constancia

    } 
   await this.serv.update_constancia(constancia_aceptada.id_constancia,json).toPromise();
   this.constancias = await this.serv.Obtener_constancias();
  
  }
  async Rechazar(constancia_rechazada){ // 2 rechazado
    const json ={
      "id_constancia": constancia_rechazada.id_constancia,
      "tipoConstancia": constancia_rechazada.tipoConstancia,
      "id_empleado": constancia_rechazada.id_empleado,
      "id_administrador": this.id,
      "estado_constancia": 2,
      "cuerpo_constancia": constancia_rechazada.cuerpo_constancia,
      "fecha_constancia": constancia_rechazada.fecha_constancia

    }
    await this.serv.update_constancia(constancia_rechazada.id_constancia,json).toPromise();
    this.constancias = await this.serv.Obtener_constancias();
  }
  atras(){

    this.navCtrl.navigateForward(["/staff",this.id,this.user,this.type]);
  }
}
