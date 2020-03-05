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
  private id_user:string;
  private quincena:string;
  private mes:string;
  private year:string;
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
    
   
    if(this.year==null){ // si es null se hace una consulta solo por el usuario
      if(this.id_user!=null && this.id_user != "0"){ // si elegio un usuario
        if(this.mes!=null && this.mes != "0"){ // puso un mes
          if(this.quincena=='1'){ // si puso una quincena

          }else if(this.quincena=='2'){ // si puso la segunda quincena

          }else if(this.quincena=='3'){ // si puso todo el mes
          }
        }
        this.result_pagos = this.serv.Usuario_especifico(this.id_user)
    }else{


    }
 
    

  }
  }
}
