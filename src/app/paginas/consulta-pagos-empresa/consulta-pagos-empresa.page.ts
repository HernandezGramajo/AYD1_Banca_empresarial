import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {Usuarios} from '../../modelos/usuarios';
import { Nominas } from '../../modelos/nominas';
import {EmpresaServicesService} from '../../servicios/empresa-services.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-consulta-pagos-empresa',
  templateUrl: './consulta-pagos-empresa.page.html',
  styleUrls: ['./consulta-pagos-empresa.page.scss'],
})
export class ConsultaPagosEmpresaPage implements OnInit {

  result_user : Observable<Usuarios>;
  result_pagos : Observable<Nominas>;
  result_pagos2 : Observable<Nominas>;
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
atras(){

  this.navCtrl.navigateForward(["/staff",this.id,this.user,this.type]);
}

  Consultar():void {
    
    this.result_pagos=null;
    this.result_pagos2=null;
 // ------------------ posibles combinaciones de consultas sin anio seleccionado 
    if(this.year==null){ // si es null se hace una consulta solo por el usuario
      if(this.id_user!=null && this.id_user != "0"){ // si elegio un usuario

        if(this.mes!=null && this.mes != "0"){ // si puso un mes 
         
          if(this.quincena=='1'){ // si puso una quincena
            this.result_pagos = this.serv.Usuario_especifico("2020",this.mes,"01",this.id_user)
            return;
          }else if(this.quincena=='2'){ // si puso la segunda quincena
            this.result_pagos2 = this.serv.Usuario_especifico("2020",this.mes,"15",this.id_user)
            return;
          }

           // mes completo  si no puso quincena o si seleeciono mes completo
           this.result_pagos = this.serv.Usuario_especifico("2020",this.mes,"01",this.id_user)
           this.result_pagos2 = this.serv.Usuario_especifico("2020",this.mes,"15",this.id_user)
           return;
        }
        // solo hay usuarios elegido tramemos el primer mes del presente anio
        this.result_pagos = this.serv.Usuario_especifico("2020","01","01",this.id_user)
        this.result_pagos2 = this.serv.Usuario_especifico("2020","01","15",this.id_user)
        return;
    }

  } //----------------posibles combinaciones de consultas con anio seleccionado
    else{ /// selecciono un anio

      if(this.mes!=null && this.mes != "0"){ // puso un mes 
        
        if(this.id_user!=null && this.id_user != "0"){ // si eligio un usuario
          
          if(this.quincena=='1'){ // si puso una quincena
            this.result_pagos = this.serv.Usuario_especifico(this.year,this.mes,"01",this.id_user)
            return;
          }else if(this.quincena=='2'){ // si puso la segunda quincena
            this.result_pagos = this.serv.Usuario_especifico(this.year,this.mes,"15",this.id_user)
            return;
          }
          // si no selecciono quinicena o seleccion mes completo muestra siempre el mes completo
          this.result_pagos = this.serv.Usuario_especifico(this.year,this.mes,"01",this.id_user);
          this.result_pagos2 = this.serv.Usuario_especifico(this.year,this.mes,"15",this.id_user);          
          return;
        }
        //---------------------- si no selecciono usuario
        if(this.quincena=='1'){ //  si no selecciono usuario pero si puso una quincena
          this.result_pagos = this.serv.pagos_por_quincena(this.year,this.mes,"01");
          return;
        }else if(this.quincena=='2'){ //  si no selecciono usuario si puso la segunda quincena
          this.result_pagos = this.serv.pagos_por_quincena(this.year,this.mes,"15");
          return;
        }
         // si no selecciono usuario pero no selecciono quincena o si selecciono pero mes completo
         // simpre muestra el mes completo
         this.result_pagos = this.serv.pagos_por_quincena(this.year,this.mes,"01");
         this.result_pagos2 = this.serv.pagos_por_quincena(this.year,this.mes,"15");
         return;
      }
    }
  }
}
