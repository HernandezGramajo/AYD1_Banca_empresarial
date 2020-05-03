import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { Beneficios } from '../../modelos/beneficios';
import { ApiService } from '../../servicios/api.service';
import { AlertController } from '@ionic/angular';
import { __await } from 'tslib';
/*import {PopoverController} from '@ionic/angular';
import {PopoverPage} from '../popover/popover.page'*/
@Component({
  selector: 'app-beneficios-staff',
  templateUrl: './beneficios-staff.page.html',
  styleUrls: ['./beneficios-staff.page.scss'],
})
export class BeneficiosStaffPage {

  private dataBeneficios : any;
  public data : Beneficios;

  private codigoBeneficio : any;

  public error : Boolean;
  private activo : Boolean;
  id =null
  user =null
  type =null
  public flagpop = 0;
  public flagatras = 0;
  public flagcreate = 0;
  constructor(private alertCtrl: AlertController,private apiService : ApiService,private activeRoute: ActivatedRoute, public navCtrl: NavController) 
  { this.data = new Beneficios(); }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');

    console.log(this.id,this.user,this.type);
    this.loadBeneficios();
  }
  
  loadBeneficios(){
    //Cargar de la API  todos los usuarios en el Select de Usuarios
    this.apiService. getAllBeneficios().subscribe( response => {
      this.dataBeneficios = response;
    })
  }

  getData(){
    //Cargar de la API la informacion de un usuario en particular
    //this.popUpMensaje('Cargando Usuario: '+this.codigoNomina);
    this.apiService.getItemBeneficios(this.codigoBeneficio).subscribe( response => {
        this.data = response;
    });
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
  
  /*CreatePopOver()
  {
    this.popover.create({component:PopoverPage,showBackdrop:false}).then((popoverElement)=>{
      popoverElement.present();
    })}*/
  }
  


