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

  id =null
  user =null
  type =null

  constructor(private apiService : ApiService,private activeRoute: ActivatedRoute, public navCtrl: NavController) { }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');
    console.log(this.id,this.user,this.type);
    this.loadPrestamos();
  }
  atras(){

    this.navCtrl.navigateForward(["/staff",this.id,this.user,this.type]);
  }
  loadPrestamos(){
      this.apiService.getAllPrestamos(this.id).subscribe( response => {
        this.data = response;
      })
  }



}
