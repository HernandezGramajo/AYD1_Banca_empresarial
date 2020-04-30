import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { LogCambios } from '../../modelos/log-cambios';
import { ApiService } from '../../servicios/api.service';
import { AlertController } from '@ionic/angular';
import { __await } from 'tslib';
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
  showMore = true;
  errorMessage: string;
  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0;
  users: string[];

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
    this.apiService.getAllLog().subscribe( response => {
      this.dataLogs = response;
    })
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


  loadUsuarios(){
    //Cargar de la API  todos los usuarios en el Select de Usuarios
    this.apiService. getAll().subscribe( response => {
      this.dataUsuarios = response;
    })
  }
  

  getData(){
    //Cargar de la API la informacion de un usuario en particular
    //this.presentAlert('Cargando Usuario: '+this.codigoBeneficio);
    this.apiService.getItem(this.codigoUsuario).subscribe(response => {
      this.dataUsuarios = response;
  });
  
  }


  doInfinite(infiniteScroll) {
    this.page = this.page+1;
    setTimeout(() => {
      this.apiService.getAll()
         .subscribe(
           res => {
             this.dataLogs = res;
             this.perPage = this.dataLogs.per_page;
             this.totalData = this.dataLogs.total;
             this.totalPage = this.dataLogs.total_pages;
             for(let i=0; i<this.dataLogs.data.length; i++) {
               this.users.push(this.dataLogs.data[i]);
             }
           },
           error =>  this.errorMessage = <any>error);

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }


}
