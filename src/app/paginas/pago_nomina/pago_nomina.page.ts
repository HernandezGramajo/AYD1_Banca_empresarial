import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { Usuarios } from '../../modelos/usuarios';
import { ApiService } from '../../servicios/api.service';


@Component({
  selector: 'app-crudusuarios',
  templateUrl: './crudusuarios.page.html',
  styleUrls: ['./crudusuarios.page.scss'],
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
  
  constructor(private apiService : ApiService,private activeRoute: ActivatedRoute, public navCtrl: NavController) { this.data = new Usuarios(); }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');
    if(this.type < 2){

    }
    console.log(this.id,this.user,this.type);
    this.loadNominas();
  }
  
  loadNominas(){
    //Cargar de la API  todos los usuarios en el Select de Usuarios
    this.apiService.getAllNominas().subscribe( response => {
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
