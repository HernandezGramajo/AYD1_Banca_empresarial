import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reportes-usuario',
  templateUrl: './reportes-usuario.page.html',
  styleUrls: ['./reportes-usuario.page.scss'],
})
export class ReportesUsuarioPage implements OnInit {

  private mes : Number;
  private anio : Number;
  
  id =null
  user =null
  type =null

  constructor(private activeRoute: ActivatedRoute, public navCtrl: NavController) { }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.user=this.activeRoute.snapshot.paramMap.get('user');
    this.type=this.activeRoute.snapshot.paramMap.get('type');
    console.log(this.id,this.user,this.type);
  }

  getReportMonth(repMes){

  }

  getReportYear(repAnio){
    
  }

}
