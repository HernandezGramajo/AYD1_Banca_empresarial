import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../../servicios/api.service';
import { Prestamos } from 'src/app/modelos/prestamos';
import { DatePipe } from '@angular/common';
import { Constancia } from 'src/app/modelos/constancia';


@Component({
  selector: 'app-sol-constancia',
  templateUrl: './sol-constancia.page.html',
  styleUrls: ['./sol-constancia.page.scss'],
})
export class SolConstanciaPage implements OnInit {
  error : Boolean;
  private mydate : Date;
  data: Constancia;
  id =null
  user =null
  type =null
  flagatras = 0;
  flagreload = 0;
  flagpop = 0;
  constructor(private apiService : ApiService,private activeRoute: ActivatedRoute, public navCtrl: NavController) { this.data = new Constancia();  }

  ngOnInit() {
    
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');
    this.data.tipoConstancia = -1;
    console.log(this.id,this.user,this.type);
    
  }
  atras(){
    this.flagatras=1;
    this.navCtrl.navigateForward(["/staff",this.id,this.user,this.type]);
  }

  solicitarconstancia(dato : Constancia){
    this.popUpMensaje('Enviando Solicitud de Constancia');
    this.error = false;
    this.checkFields("", dato);
    if(this.error == false){
      dato.id_constancia = 0;
      dato.estado_constancia = 0;
      dato.id_empleado = this.id;
      dato.id_administrador = 2
      this.mydate = new Date();
      dato.fecha_constancia = this.mydate.toISOString();
      dato = this.data;
      //this.popUpMensaje(this.data.CUOTAS);
      //AQUI DEBE DE IR EL SUBSCRIBE DE POST CONSTANCIA
      this.apiService.createItemConstancia(this.data).subscribe();
      console.log("fecha constancia: "+ this.data.fecha_constancia);

    }
  }

  checkFields(mensajeDeError : any, dato : Constancia){
	  
    //Anidar en mensajeDeError, todos los campos vacios
    if(!dato.tipoConstancia || dato.tipoConstancia == -1){
      mensajeDeError = mensajeDeError + "Favor seleccionar el tipo de constancia a solicitar.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }
		
		    if(!dato.cuerpo_constancia || dato.cuerpo_constancia.length == 0){
      mensajeDeError = mensajeDeError + "Razon o motivo para la solicitud de constancia esta vacio.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }

  }

  popUpMensaje(mensaje){
    const loading = document.createElement('ion-loading');
    loading.message = mensaje;
    loading.duration = 1000;
    loading.present();
    
    document.body.appendChild(loading);
    this.flagpop = 1;
  }

  async reload(){
    this.flagreload = 1;
    location.reload();
  }
}
