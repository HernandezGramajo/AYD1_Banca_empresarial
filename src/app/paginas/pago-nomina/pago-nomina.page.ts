import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { Usuarios } from '../../modelos/usuarios';
import { ApiService } from '../../servicios/api.service';
import { Nominas } from '../../modelos/nominas';
import { AlertController } from '@ionic/angular';
import { __await } from 'tslib';
@Component({
  selector: 'app-pago-nomina',
  templateUrl: './pago-nomina.page.html',
  styleUrls: ['./pago-nomina.page.scss'],
})
export class PagoNominaPage implements OnInit {

  private dataNominas : any;
  private dataUsuarios : any;
  private dataTipoNominas : any;
  private data : Nominas;

  
  private codigoNomina : any;
  private codigoUsuario : any;
  private codigoTipoNomina : any;
  private tipo : String;

  private error : Boolean;
  private activo : Boolean;
  id =null
  user =null
  type =null
  
  constructor(private alertCtrl: AlertController,private apiService : ApiService,private activeRoute: ActivatedRoute, public navCtrl: NavController) { this.data = new Nominas(); }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');
    console.log(this.id,this.user,this.type);
    this.loadNominas();
  }
  

  
  loadNominas(){
    //Cargar de la API  todos los usuarios en el Select de Usuarios
    this.apiService.getAllNominas().subscribe( response => {
      this.dataNominas = response;
    })
    this.apiService.getAll().subscribe( response => {
      this.dataUsuarios = response;
    })
    this.apiService.getAllTipoNominas().subscribe( response => {
      this.dataTipoNominas = response;
    })
  }

  getData(){
    //Cargar de la API la informacion de un usuario en particular
    //this.presentAlert('Cargando Usuario: '+this.codigoNomina);
    this.apiService.getItemNomina(this.codigoNomina).subscribe( response => {
        this.data = response;
    });
  }

  createNomina(){
    //Crear Nomina
    //Error si ya existe o no puede ser creada
    this.presentAlert('Creando Nomina');
    this.error = false;
    this.checkFields("");
    this.data.id = 0;
    this.data.id_user = this.codigoUsuario;
    this.data.id_payment_type = this.codigoTipoNomina;
    if(this.error == false){
      this.apiService.createItemNominas(this.data).subscribe();
      this.loadNominas();
    }
  }

  modifyNomina(){
    //Modificar usuario seleccionado
    //Error si no se ha cargado uno
    this.presentAlert('Modificando Nomina');
    this.error = false;
    this.checkFields("");
    this.data.id_user = this.codigoUsuario;
    this.data.id_payment_type = this.codigoTipoNomina;
    if(this.error == false){
      this.apiService.updateItemNominas(this.data.id,this.data).subscribe();
      this.loadNominas();
    }
  }
  
  
 checkFields(mensajeDeError){
	  
    //Anidar en mensajeDeError, todos los campos vacios
    if(!this.data.id || this.data.id.toString().length == 0){
      mensajeDeError = mensajeDeError + "ID vacio<br>";
      this.error = true;
      this.presentAlert(mensajeDeError);
    }
	
      if(!this.data.start_period || this.data.start_period.toString().length == 0){
      mensajeDeError = mensajeDeError + "Periodo Final Vacio.<br>";
      this.error = true;
      this.presentAlert(mensajeDeError);
    }
	
		    if(!this.data.end_period || this.data.end_period.toString().length == 0){
      mensajeDeError = mensajeDeError + "Periodo Final Vacio.<br>";
      this.error = true;
      this.presentAlert(mensajeDeError);
    }


    if(!this.data.missed_days || this.data.missed_days.toString().length == 0){
      mensajeDeError = mensajeDeError + "Dias Perdidos Vacio.<br>";
      this.error = true;
      this.presentAlert(mensajeDeError);
    }
	
	    if(!this.data.payment_per_day || this.data.payment_per_day.toString().length == 0){
      mensajeDeError = mensajeDeError + "Dias Pagados Vacio.<br>";
      this.error = true;
      this.presentAlert(mensajeDeError);
    }
	
    if(!this.data.total_payment || this.data.total_payment.toString().length == 0){
      mensajeDeError = mensajeDeError + "Pago Total Vacio.<br>";
      this.error = true;
      this.presentAlert(mensajeDeError);
    }
	
    if(!this.data.id_user || this.data.id_user.toString().length == 0){
      mensajeDeError = mensajeDeError + "Usuario a Pagar Vacio.<br>";
      this.error = true;
      this.presentAlert(mensajeDeError);
    }
	
    if(!this.data.id_payment_type || this.data.id_payment_type.toString().length == 0){
      mensajeDeError = mensajeDeError + "Tipo de Pago Vacio.<br>";
      this.error = true;
      this.presentAlert(mensajeDeError);
    }
	
	
  }


  async presentAlert(mensaje) {
    let alert = await this.alertCtrl.create({
      backdropDismiss:true,
     
      message:mensaje,

      
    });
    alert.present();
  }
  


  returnMenu(){
    this.navCtrl.navigateForward(["/staff",this.id,this.user,this.type]);
  }

}
