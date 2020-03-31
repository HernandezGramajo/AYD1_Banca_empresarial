import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Prestamos } from '../../modelos/prestamos';
import { Nominas } from 'src/app/modelos/nominas';

@Component({
  selector: 'app-manejo-prestamo',
  templateUrl: './manejo-prestamo.page.html',
  styleUrls: ['./manejo-prestamo.page.scss'],
})
export class ManejoPrestamoPage implements OnInit {

  private prestamo : Prestamos;
  private todosprest : Array<Prestamos> = [];
  private filtroprest : Array<Prestamos> = [];
  private listanomina : Array<Nominas> = [];
  private nominapresto : Nominas;

  private promedio : Number
  private monto : Number;
  private activo : Number;
  id =null
  user =null
  type =null
  private codigoPrest : Number;


  constructor(private apiService : ApiService,private activeRoute: ActivatedRoute, public navCtrl: NavController) { }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');
    console.log(this.id,this.user,this.type);
    this.activo = 0;
    this.loadPrestamos();
  }

  async loadPrestamos(){
    console.log("cargando Prestamos");
      //Obtener Prestamos de los clientes
    this.apiService.getAllPrestamossinID().subscribe( response => {
      this.todosprest = response;
      console.log("Total de Prestamos "+this.todosprest.length);

      this.getPrestamosPend(this.todosprest);
    });
  }

  async getPrestamosPend(listadoPrest : Prestamos[]){
    var i;
    console.log("obteniendo nombres prestamo y "+"total prestamos "+this.todosprest.length);
    for(i = 0; i < listadoPrest.length; i++){
      //filtrar los prestamos y obtener solo los pendientes o valor 0
      if(listadoPrest[i].ESTADO == 0){
        this.filtroprest.push(listadoPrest[i]);
      }
    }
    console.log("Prestamos filtrados por pendiente: "+this.filtroprest.length);
  }

  //ver si hay prestamos activos
  async checkPrestamo(){
    try {
      this.activo = 0
      console.log("codigo del Prestamo seleccionado: "+this.codigoPrest);
      this.apiService.getPrestamo(this.codigoPrest).subscribe( response => {
        this.prestamo = response;
        console.log("dentro ID: "+this.prestamo.ID);
        var i;
        for(i = 0; i< this.filtroprest.length; i++){
          if(this.prestamo.ID_EMPLEADO == this.filtroprest[i].ID_EMPLEADO && this.filtroprest[i].ESTADO == 1){
            this.activo = 1;
            console.log("el empleado tiene prestamos activos");
            this.popUpMensaje("el empleado tiene prestamos activos");
            
          }
        }
        if(this.activo == 0){
          this.comparePlanilla(this.prestamo)
        }
      })


    } catch (error) {
      console.log("el error es: "+error);
    }
  }

  //buscar planillas y promediarlas
async comparePlanilla(itempestamo: Prestamos){
  //obtener todas las nominas
  this.apiService.getNominasCliente(itempestamo.ID_EMPLEADO).subscribe( res =>{
    this.listanomina = res;
    //filtrar nominas
    var cuenta = 0;
    var i;
    for(i = 0; i< this.listanomina.length; i++){
      if(this.listanomina[i].id_payment_type!= 5){
        cuenta = cuenta + this.listanomina[i].total_payment.valueOf();
      }
    }
    this.promedio = cuenta / this.listanomina.length
    console.log("el promedio de las nominas es: " + this.promedio);
    this.monto = itempestamo.MONTO.valueOf() / itempestamo.CUOTAS.valueOf();
    console.log("el monto de las cuotas es: " + this.monto);
  });
}

//recaregar pagina
  async reload(){
    location.reload()

  }

  atras(){

    this.navCtrl.navigateForward(["/staff",this.id,this.user,this.type]);
  }

  popUpMensaje(mensaje){
    const loading = document.createElement('ion-loading');
    loading.message = mensaje;
    loading.duration = 1000;
    loading.present();
    
    document.body.appendChild(loading);
  }


async aprobar(){
  var mydate = new Date();
  this.prestamo.ESTADO = 1;
  this.prestamo.ID_ADMINISTARDOR = this.id;
  this.popUpMensaje("prestamo aprobado");
  this.apiService.updateItemPrestamo(this.prestamo.ID, this.prestamo).subscribe();
  this.activo = 1;
this.nominapresto = new Nominas();
  this.nominapresto.id  = 0;
  this.nominapresto.start_period = mydate;
  this.nominapresto.end_period = mydate;
  this.nominapresto.id_payment_type = 5;
  this.nominapresto.id_user = this.prestamo.ID_EMPLEADO;
  this.nominapresto.missed_days = 0;
  this.nominapresto.payment_per_day = 0;
  this.nominapresto.total_payment = this.prestamo.MONTO;
  console.log("previo a nomina");
  this.apiService.createItemNominas(this.nominapresto).subscribe();

}

async denegar(){
  this.prestamo.ESTADO = 2;
  this.prestamo.ID_ADMINISTARDOR = this.id;
  this.apiService.updateItemPrestamo(this.prestamo.ID, this.prestamo).subscribe();
  this.popUpMensaje("prestamo denegado");
  this.activo = 1;

}

}
