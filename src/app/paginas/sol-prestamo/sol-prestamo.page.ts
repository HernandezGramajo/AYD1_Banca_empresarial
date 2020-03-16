import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../../servicios/api.service';
import { Prestamos } from 'src/app/modelos/prestamos';

@Component({
  selector: 'app-sol-prestamo',
  templateUrl: './sol-prestamo.page.html',
  styleUrls: ['./sol-prestamo.page.scss'],
})
export class SolPrestamoPage implements OnInit {

  private dataPrestamo : any;
  private data: Prestamos;

  private idprestamo : Number;
  private razon : String;
  private monto : Number;
  private cuotas : Number;
  private estado : Number;
  private codigoadmin : Number;
  private codigoEmp : Number;
  private error : Boolean;


  id =null
  user =null
  type =null

  constructor(private apiService : ApiService,private activeRoute: ActivatedRoute, public navCtrl: NavController) { this.data = new Prestamos(); }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');
    console.log(this.id,this.user,this.type);
    
  }

}
