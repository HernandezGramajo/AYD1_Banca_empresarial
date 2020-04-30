import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { Beneficios } from '../../modelos/beneficios';
import { ApiService } from '../../servicios/api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crudbeneficios-empresa',
  templateUrl: './crudbeneficios-empresa.page.html',
  styleUrls: ['./crudbeneficios-empresa.page.scss'],
})
export class CrudbeneficiosEmpresaPage implements OnInit {

  private dataBeneficios : any;
  public data : Beneficios;

  private codigoBeneficio : Number;
  private nombreBeneficio : String;
  private descBeneficio : String;

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
    //this.presentAlert('Cargando Usuario: '+this.codigoBeneficio);
    this.apiService.getItemBeneficios(this.codigoBeneficio).subscribe(response => {
      this.data = response;
  });
  
  }

  createBeneficios(){
   //Crear usuario
    //Error si ya existe o no puede ser creado
    this.presentAlert('Creando Beneficio');
    this.error = false;
    this.checkFields("");
    this.flagcreate = 1; 
    this.data.id_beneficio.toString() == "";
    this.apiService.createItemBeneficios(this.data).subscribe();
  }

  modifyBeneficios(){
    //Modificar usuario seleccionado
    //Error si no se ha cargado uno
    this.presentAlert('Modificando Beneficio');
    this.error = false;
    if(this.error == false){
      this.flagcreate = 1; 
      this.apiService.updateItemBeneficios(this.data.id_beneficio,this.data).subscribe();
      this.loadBeneficios();
    }
  }
  deleteBeneficios(){
    //Dar de baja a usuario
    //Error si no se ha cargado uno
       this.error = false;
       if(this.error == false){
        if (prompt("Click the OK button?")!=null)
        {
        this.flagcreate = 1;   
        this.apiService.deleteItemBeneficios(this.data.id_beneficio,this.data).subscribe();
        this.loadBeneficios();
        }
        else
        {
        alert('you clicked cancel')
        }

    }
  
	
  }


  presentConfirm() {
    let alert = this.alertCtrl.create({
      message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    }).then(alert=> alert.present());

  }
  async presentAlert(mensaje) {
    let alert = await this.alertCtrl.create({
      backdropDismiss:true,
     
      message:mensaje,

      
    });
    alert.present();
  }
  checkFields(mensajeDeError){
	  
    //Anidar en mensajeDeError, todos los campos vacios
    if(!this.data.id_beneficio || this.data.id_beneficio.toString().length == 0){
      mensajeDeError = mensajeDeError + "ID vacio.<br>";
      this.error = true;
      this.presentAlert(mensajeDeError);
    }
	
	    if(!this.data.nombre_beneficio || this.data.nombre_beneficio.length == 0){
      mensajeDeError = mensajeDeError + "Nombre de Beneficio vacio.<br>";
      this.error = true;
      this.presentAlert(mensajeDeError);
    }
	
		    if(!this.data.descripcion_beneficio||  this.data.descripcion_beneficio.length == 0){
      mensajeDeError = mensajeDeError + "Descripción de Beneficio vacio.<br>";
      this.error = true;
      this.presentAlert(mensajeDeError);
    }
  }

  returnMenu(){
    this.navCtrl.navigateForward(["/staff",this.id,this.user,this.type]);
  }
}


