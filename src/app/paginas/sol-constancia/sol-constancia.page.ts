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
    console.log(this.id,this.user,this.type);
    
  }
  atras(){
    this.flagatras=1;
    this.navCtrl.navigateForward(["/staff",this.id,this.user,this.type]);
  }

  solicitarconstancia(){
    this.popUpMensaje('Enviando Solicitud de Constancia');
    this.error = false;
    this.checkFields("");
    if(this.error == false){
      this.data.id_constancia = 0;
      this.data.estado_constancia = 0;
      this.data.id_empleado = this.id;
      this.data.id_administrador = 2
      this.mydate = new Date();
      this.data.fecha_constancia = this.mydate.toISOString();
      //this.popUpMensaje(this.data.CUOTAS);
      //AQUI DEBE DE IR EL SUBSCRIBE DE POST CONSTANCIA
      this.apiService.createItemConstancia(this.data).subscribe();
      console.log("fecha constancia: "+ this.data.fecha_constancia);
      this.reload();
    }
  }

  checkFields(mensajeDeError){
	  
    //Anidar en mensajeDeError, todos los campos vacios
    if(!this.data.tipoConstancia || this.data.tipoConstancia.toString().length == 0){
      mensajeDeError = mensajeDeError + "Favor seleccionar el tipo de constancia a solicitar.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }
		
		    if(!this.data.cuerpo_constancia||  this.data.cuerpo_constancia.length == 0){
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
    setTimeout(function(){ 
      this.flagreload = 1;
      location.reload()
    }, 2000);
  }
}
