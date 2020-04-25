import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../../servicios/api.service';
import { Prestamos } from 'src/app/modelos/prestamos';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sol-prestamo',
  templateUrl: './sol-prestamo.page.html',
  styleUrls: ['./sol-prestamo.page.scss'],
})
export class SolPrestamoPage implements OnInit {

  private dataPrestamo : any;
  private data: Prestamos;

  private idprestamo : Number;
  private razon : String;
  private monto : Number;
  private cuotas : Number;
  private estado : Number;
  private codigoEmp : Number;
  private error : Boolean;
  private mydate : Date;
  private fechagen : String;
private datepip : DatePipe;

  id =null
  user =null
  type =null

  constructor(private apiService : ApiService,private activeRoute: ActivatedRoute, public navCtrl: NavController) { this.data = new Prestamos(); }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');
    console.log(this.id,this.user,this.type);
    
  }

  atras(){

    this.navCtrl.navigateForward(["/staff",this.id,this.user,this.type]);
  }
  solicitarPrestamo(){
    this.popUpMensaje('Enviando Solicitud de Prestamo');
    this.error = false;
    this.checkFields("");
    if(this.error == false){
      this.data.ID = 0;
      this.data.ESTADO = 0;
      this.data.ID_EMPLEADO = this.id;
      this.data.ID_ADMINISTARDOR = 2
      this.mydate = new Date();
      this.data.FECHA_GENERADO = this.mydate.toISOString();
      //this.popUpMensaje(this.data.CUOTAS);
      this.apiService.createItemPrestamo(this.data).subscribe();
    }
  }

  checkFields(mensajeDeError){
	  
    //Anidar en mensajeDeError, todos los campos vacios
    if(!this.data.CUOTAS || this.data.CUOTAS.toString().length == 0){
      mensajeDeError = mensajeDeError + "Favor indicar el numero de cuotas a pagar.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }
	
	    if(!this.data.MONTO || this.data.MONTO.toString().length == 0 || this.data.MONTO <=2000.00){
      mensajeDeError = mensajeDeError + "El monto no puede estar vacio o ser menor a Q. 2000.00<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }
	
		    if(!this.data.RAZON||  this.data.RAZON.length == 0){
      mensajeDeError = mensajeDeError + "Razon o motivo para la solicitud de prestamo vacio.<br>";
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
  }
}
