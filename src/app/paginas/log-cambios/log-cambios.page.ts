import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { LogCambios } from '../../modelos/log-cambios';
import { ApiService } from '../../servicios/api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-log-cambios',
  templateUrl: './log-cambios.page.html',
  styleUrls: ['./log-cambios.page.scss'],
})
export class LogCambiosPage implements OnInit {

  private dataUsuarios : any;
  private dataLogs : any;
  private codigoUsuario : Number;
  private mesConsulta : number;
  private anioConsulta : number;
  private userConsulta : number;

  id =null
  user =null
  type =null
  constructor(private alertCtrl: AlertController,private apiService : ApiService,private activeRoute: ActivatedRoute, public navCtrl: NavController) { }

  ngOnInit() {
    this.loadUsuarios();
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');

    console.log(this.id,this.user,this.type);
  
  }

  getLogs(){
    var tipoConsulta = 0;
    if( (!this.mesConsulta || this.mesConsulta.toString().length == 0) &&
        (!this.anioConsulta || this.anioConsulta.toString().length == 0) &&
        (!this.userConsulta || this.userConsulta.toString().length == 0)){
      //Sin Mes, Sin Año, Sin Usuario
      this.dataLogs = null
      this.apiService.getItemLog(this.id).subscribe( response => {
        this.dataLogs = response;
      });

    }
    
    else if
    ( (!this.mesConsulta || this.mesConsulta.toString().length == 0) &&
      (this.anioConsulta || this.anioConsulta.toString().length > 0) &&
      (this.userConsulta || this.userConsulta.toString().length > 0) ){
      //Sin Mes, Con Año, Con Usuario
      this.dataLogs = null
      this.apiService.getItemLogAnio(this.userConsulta, this.anioConsulta).subscribe( response => {
        this.dataLogs = response;
      });
      console.log(this.anioConsulta)

    }
    
    else if
    ( (this.mesConsulta || this.mesConsulta.toString().length > 0) &&
      (!this.anioConsulta || this.anioConsulta.toString().length == 0) &&
      (!this.userConsulta || this.userConsulta.toString().length == 0)){
      //Con Mes, Sin Año, Sin Usuario
      this.dataUsuarios = null
      this.popUpMensaje("ERROR: Si selecciona un mes, por favor, seleccione un año tambien.");
    }
    
    else{
      //Vienen los tres
      this.dataUsuarios = null
      this.apiService.getItemLogMesAnio(this.userConsulta,this.mesConsulta,this.anioConsulta).subscribe( response => {
        this.dataUsuarios = response;
      });
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


  loadUsuarios(){
    //Cargar de la API  todos los usuarios en el Select de Usuarios
    this.apiService. getAll().subscribe( response => {
      this.dataUsuarios = response;
    })
  }
  

  getData(){
    //Cargar de la API la informacion de un usuario en particular
    //this.popUpMensaje('Cargando Usuario: '+this.codigoBeneficio);
    this.apiService.getItem(this.codigoUsuario).subscribe(response => {
      this.dataUsuarios = response;
  });
  
  }
}
