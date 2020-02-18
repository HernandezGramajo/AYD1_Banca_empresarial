import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-crudusuarios',
  templateUrl: './crudusuarios.page.html',
  styleUrls: ['./crudusuarios.page.scss'],
})
export class CrudusuariosPage implements OnInit {

  private codigoEmpleado : CrudusuariosPage
  private codigo : CrudusuariosPage
  private usuario : CrudusuariosPage
  private nombre : CrudusuariosPage
  private apellido : CrudusuariosPage
  private password : CrudusuariosPage
  private email : CrudusuariosPage
  private tipo : CrudusuariosPage

  private mensajeDeError : String

  id =null
  user =null
  type =null
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');
    console.log(this.id,this.user,this.type);
   
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
