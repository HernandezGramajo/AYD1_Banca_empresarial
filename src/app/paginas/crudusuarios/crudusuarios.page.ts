import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { Usuarios } from '../../modelos/usuarios';
import { ApiService } from '../../servicios/api.service';
import { AlertController } from '@ionic/angular';
import { __await } from 'tslib';

@Component({
  selector: 'app-crudusuarios',
  templateUrl: './crudusuarios.page.html',
  styleUrls: ['./crudusuarios.page.scss'],
})
export class CrudusuariosPage implements OnInit {

  private dataUsuarios : any;
  private data : Usuarios;

  private codigoEmpleado : Number;
  private tipo : String;

  private error : Boolean;
  private activo : Boolean;
  id =null
  user =null
  type =null
  
  constructor(private alertCtrl: AlertController,private apiService : ApiService,private activeRoute: ActivatedRoute, public navCtrl: NavController) { this.data = new Usuarios(); }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');
    if(this.type < 2){

    }
    console.log(this.id,this.user,this.type);
    this.loadUsuarios();
  }
  
  loadUsuarios(){
    //Cargar de la API  todos los usuarios en el Select de Usuarios
    this.apiService.getAll().subscribe( response => {
      this.dataUsuarios = response;
    })
  }

  getData(){
    //Cargar de la API la informacion de un usuario en particular
    //this.presentAlert('Cargando Usuario: '+this.codigoEmpleado);
    this.apiService.getItem(this.codigoEmpleado).subscribe( response => {
      if(response.type != 0)
        this.data = response;
        if(response.active == 0)
          this.activo = false
        else
          this.activo = true
    });
  }

  createUsuario(){
    //Crear usuario
    //Error si ya existe o no puede ser creado
    this.presentAlert('Creando Usuario');
    this.error = false;
    this.checkFields("");
    if(this.error == false){
      this.data.active = 1;
      if( this.tipo == "Empleado")
        this.data.type = 2;
      if( this.tipo == "Administrador")
        this.data.type = 1;
      this.apiService.createItem(this.data).subscribe();
    }
  }

  modifyUsuario(){
    //Modificar usuario seleccionado
    //Error si no se ha cargado uno
	
    this.presentAlert('Modificando Usuario');
	    this.error = false;
    this.checkFields("");
    if(this.error == false){
    if( this.tipo == "Empleado")
      this.data.type = 2;
    if( this.tipo == "Administrador")
      this.data.type = 1;
    this.apiService.updateItem(this.data.id,this.data).subscribe();
	}
  }

  deleteUsuario(){
    //Dar de baja a usuario
    //Error si no se ha cargado uno
    this.presentAlert('Dando de Baja a Usuario');
    this.data.active = 0;
    this.apiService.updateItem(this.data.id,this.data).subscribe();
	
  }

  reactivateUsuario(){
    //reactivar usuario
    //Error si no se ha cargado uno
    this.presentAlert('Reactivando Usuario');
    this.data.active = 1;
    this.apiService.updateItem(this.data.id,this.data).subscribe();
	
  }

  checkFields(mensajeDeError){
	  
    //Anidar en mensajeDeError, todos los campos vacios
    if(!this.data.id || this.data.id.toString().length == 0){
      mensajeDeError = mensajeDeError + "ID vacio.<br>";
      this.error = true;
      this.presentAlert(mensajeDeError);
    }
	
	    if(!this.data.user_name || this.data.user_name.length == 0){
      mensajeDeError = mensajeDeError + "Nombre de Usuario vacio.<br>";
      this.error = true;
      this.presentAlert(mensajeDeError);
    }
	
		    if(!this.data.first_name||  this.data.first_name.length == 0){
      mensajeDeError = mensajeDeError + "Primer Nombre vacio.<br>";
      this.error = true;
      this.presentAlert(mensajeDeError);
    }
	
			    if(!this.data.last_name||  this.data.last_name.length == 0){
      mensajeDeError = mensajeDeError + "Segundo Nombre vacio.<br>";
      this.error = true;
      this.presentAlert(mensajeDeError);
    }
	
			    if(!this.data.e_mail||  this.data.e_mail.length == 0){
      mensajeDeError = mensajeDeError + "Email vacio.<br>";
      this.error = true;
      this.presentAlert(mensajeDeError);
    }
	
			    if(!this.data.password||  this.data.password.length == 0){
      mensajeDeError = mensajeDeError + "Password vacio.<br>" ; 
      this.error = true;
      this.presentAlert(mensajeDeError);
    }
     if(!this.data.type||  this.data.type.toString().length == 0){
      mensajeDeError = mensajeDeError + "Tipo vacio.<br>" ; 
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
