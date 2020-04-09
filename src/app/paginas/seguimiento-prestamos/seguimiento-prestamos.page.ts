import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../../servicios/api.service';
import { Prestamos } from '../../modelos/prestamos';

@Component({
  selector: 'app-seguimiento-prestamos',
  templateUrl: './seguimiento-prestamos.page.html',
  styleUrls: ['./seguimiento-prestamos.page.scss'],
})
export class SeguimientoPrestamosPage implements OnInit {

  private data : any;
  private dataOption : Number;

  id =null
  user =null
  type =null

  constructor(private apiService : ApiService,private activeRoute: ActivatedRoute, public navCtrl: NavController) { }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');
    console.log(this.id,this.user,this.type);
  }

  atras(){
    this.navCtrl.navigateForward(["/staff",this.id,this.user,this.type]);
  }

  onChange(){
    this.data = null;
  }

  cargarData(){
    if(this.dataOption == 1){
      this.loadPrestamos();
    }else if(this.dataOption == 2){
      this.loadConstancias();
    }else{
      this.popUpMensaje("Seleccione que tipo de solicitudes quiere revisar.");
    }
  }

  loadPrestamos(){
      this.apiService.getAllPrestamos(this.id).subscribe( response => {
        this.data = response;
      })
  }

  loadConstancias(){
    this.apiService.getAllConstancias(this.id).subscribe( response => {
      this.data = response;
    })
  }



  popUpMensaje(mensaje){
    const loading = document.createElement('ion-loading');
    loading.message = mensaje;
    loading.duration = 1000;
    loading.present();
    
    document.body.appendChild(loading);
  }


}
