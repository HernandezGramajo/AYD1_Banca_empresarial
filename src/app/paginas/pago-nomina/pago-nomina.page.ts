import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { Usuarios } from '../../modelos/usuarios';
import { ApiService } from '../../servicios/api.service';
import { Nominas } from '../../modelos/nominas';

@Component({
  selector: 'app-pago-nomina',
  templateUrl: './pago-nomina.page.html',
  styleUrls: ['./pago-nomina.page.scss'],
})
export class PagoNominaPage implements OnInit {

  private dataNominas : any;
  private data : Nominas;

  
  private codigoNomina : Number;
  private tipo : String;

  private error : Boolean;
  private activo : Boolean;
  id =null
  user =null
  type =null
  
  constructor(private apiService : ApiService,private activeRoute: ActivatedRoute, public navCtrl: NavController) { this.data = new Nominas(); }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');
    if(this.type < 2){

    }
    console.log(this.id,this.user,this.type);
    //this.loadNominas();
  }
  

  
  loadNominas(){
    //Cargar de la API  todos los usuarios en el Select de Usuarios
    this.apiService.getAllNominas().subscribe( response => {
      this.dataNominas = response;
    })
  }
  
  
    loadTipoNominas(){
    //Cargar de la API  todos los usuarios en el Select de Usuarios
    this.apiService.getAllTipoNominas().subscribe( response => {
      this.dataNominas = response;
    })
  }

  getData(){
    //Cargar de la API la informacion de un usuario en particular
    //this.popUpMensaje('Cargando Usuario: '+this.codigoNomina);
    this.apiService.getItemNomina(this.codigoNomina).subscribe( response => {
        this.data = response;
    });
  }

  createNomina(){
    //Crear Nomina
    //Error si ya existe o no puede ser creada
    this.popUpMensaje('Creando Nomina');
    this.error = false;
    this.checkFields("");
   /* if(this.error == false){
      this.data.active = 1;
      if( this.tipo == "Empleado")
        this.data.type = 2;
      if( this.tipo == "Administrador")
        this.data.type = 1;
      this.apiService.createItemNominas(this.data).subscribe();
    }*/
  }

  modifyNomina(){
    //Modificar usuario seleccionado
    //Error si no se ha cargado uno
	
    this.popUpMensaje('Modificando Nomina');
	    this.error = false;
    this.checkFields("");
    /*if(this.error == false){
    if( this.tipo == "Empleado")
      this.data.type = 2;
    if( this.tipo == "Administrador")
      this.data.type = 1;
    this.apiService.updateItemNominas(this.data.id,this.data).subscribe();
	}*/
  }
  
  
 checkFields(mensajeDeError){
	  
    //Anidar en mensajeDeError, todos los campos vacios
    if(!this.data.id || this.data.id.toString().length == 0 || this.data.id != 0){
      mensajeDeError = mensajeDeError + "ID vacio o debe ser 0.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }
	
			    if(!this.data.start_period || this.data.start_period.toString().length == 0 || this.data.start_period.toString().length != 0){
      mensajeDeError = mensajeDeError + "Periodo Final Vacio.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }
	
		    if(!this.data.end_period || this.data.end_period.toString().length == 0 || this.data.end_period.toString().length != 0){
      mensajeDeError = mensajeDeError + "Periodo Final Vacio.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }


    if(!this.data.missed_days || this.data.missed_days.toString().length == 0 || this.data.missed_days != 0){
      mensajeDeError = mensajeDeError + "Dias Perdidos Vacio.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }
	
	    if(!this.data.payment_per_day || this.data.payment_per_day.toString().length == 0 || this.data.payment_per_day != 0){
      mensajeDeError = mensajeDeError + "Dias Pagados Vacio.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }
	
	    if(!this.data.total_payment || this.data.total_payment.toString().length == 0 || this.data.total_payment != 0){
      mensajeDeError = mensajeDeError + "Pago Total Vacio.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }
	
		    if(!this.data.id_payment_type || this.data.id_payment_type.toString().length == 0 || this.data.id_payment_type != 0){
      mensajeDeError = mensajeDeError + "Tipo de Pago Vacio.<br>";
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

  returnMenu(){
    this.navCtrl.navigateForward(["/staff",this.id,this.user,this.type]);
  }

}
