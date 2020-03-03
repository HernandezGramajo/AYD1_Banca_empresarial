import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {Usuarios} from '../../modelos/usuarios';
import {Pago_nominas} from '../../modelos/nominas_pagos';
import {EmpresaServicesService} from '../../servicios/empresa-services.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-consulta-pagos-empresa',
  templateUrl: './consulta-pagos-empresa.page.html',
  styleUrls: ['./consulta-pagos-empresa.page.scss'],
})
export class ConsultaPagosEmpresaPage implements OnInit {

  result_user : Observable<Usuarios>;
  result_pagos : Observable<Pago_nominas>;
  private id_user:ConsultaPagosEmpresaPage;
  private salario:ConsultaPagosEmpresaPage;
  private mes:ConsultaPagosEmpresaPage;
  private year:ConsultaPagosEmpresaPage;
  id =null
  user =null
  type =null
  constructor(private activeRoute: ActivatedRoute, public navCtrl: NavController, private serv :EmpresaServicesService) { }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');
    this.cargar_datos();
  }

  cargar_datos():void{

    this.result_user = this.serv.obtenerdatos_Usuarios();
  }


  Consultar():void {
 this.result_pagos = this.serv.pago_primera_quincena(this.year,this.mes);
    console.log(this.year);
    console.log(this.mes);
    console.log(this.salario);
    console.log(this.id_user);
    if(this.id_user==null){
      console.log("-1");
    }else{
      console.log(this.id_user);

    }
    

  }

}
