import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../modelos/usuarios';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-crudusuarios',
  templateUrl: './crudusuarios.page.html',
  styleUrls: ['./crudusuarios.page.scss'],
})
export class CrudusuariosPage implements OnInit {

  data : Usuarios;

  private codigoEmpleado : String
  private tipo : String

  private mensajeDeError : String

  constructor(
    private apiService : ApiService,
  ) { 
    this.data = new Usuarios();
  }

  ngOnInit() {
  }

  loadUsuarios(){
    //Cargar de la API  todos los usuarios en el Select de Usuarios
  }

  getData(){
    //Cargar de la API la informacion de un usuario en particular
    this.popUpMensaje('Cargando Usuario: '+this.codigoEmpleado);
  }

  createUsuario(){
    //Crear usuario
    //Error si ya existe o no puede ser creado
    this.popUpMensaje('Creando Usuario');
    this.data.active = 1;
    if( this.tipo == "Empleado")
      this.data.type = 2;
    if( this.tipo == "Administrador")
      this.data.type = 1;
    this.apiService.createItem(this.data).subscribe();
  }

  modifyUsuario(){
    //Modificar usuario seleccionado
    //Error si no se ha cargado uno
    this.popUpMensaje('Modificando Usuario');
  }

  deleteUsuario(){
    //Dar de baja a usuario
    //Error si no se ha cargado uno
    this.popUpMensaje('Dando de Baja a Usuario');
  }

  checkFields(mensajeDeError){
    //Anidar en mensajeDeError, todos los campos vacios
  }

  popUpMensaje(mensaje){
    const loading = document.createElement('ion-loading');
    loading.message = mensaje;
    loading.duration = 1000;
    loading.present();
    
    document.body.appendChild(loading);
  }

}
