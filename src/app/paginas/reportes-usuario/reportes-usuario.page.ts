import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { Nominas } from '../../modelos/nominas';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-reportes-usuario',
  templateUrl: './reportes-usuario.page.html',
  styleUrls: ['./reportes-usuario.page.scss'],
})
export class ReportesUsuarioPage implements OnInit {

  private dataUsuarios : any;

  private mesConsulta : number;
  private anioConsulta : number;
  
  id =null
  user =null
  type =null

  constructor(private apiService : ApiService, private activeRoute: ActivatedRoute, public navCtrl: NavController) { }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');
    console.log(this.id,this.user,this.type);
  }

  getNominas(){
    var tipoConsulta = 0;
    if( (!this.mesConsulta || this.mesConsulta.toString().length == 0) && (!this.anioConsulta || this.anioConsulta.toString().length == 0) ){
      //Sin Mes, Sin Año
      this.dataUsuarios = null
      this.apiService.getItemNominas(this.id).subscribe( response => {
        this.dataUsuarios = response;
      });
    }else if( (!this.mesConsulta || this.mesConsulta.toString().length == 0) && (this.anioConsulta || this.anioConsulta.toString().length > 0) ){
      //Sin Mes, Con Año
      this.dataUsuarios = null
      this.apiService.getItemNominasAnio(this.id, this.anioConsulta).subscribe( response => {
        this.dataUsuarios = response;
      });
      console.log(this.anioConsulta)
    }else if( (this.mesConsulta || this.mesConsulta.toString().length > 0) && (!this.anioConsulta || this.anioConsulta.toString().length == 0) ){
      //Con Mes, Sin Año
      this.dataUsuarios = null
      this.popUpMensaje("ERROR: Si selecciona un mes, por favor, seleccione un año tambien.");
    }else{
      //Vienen los dos
      this.dataUsuarios = null
      this.apiService.getItemNominasMesAnio(this.id,this.mesConsulta,this.anioConsulta).subscribe( response => {
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

}
