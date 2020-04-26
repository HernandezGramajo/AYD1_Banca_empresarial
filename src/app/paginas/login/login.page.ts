import { Component,OnInit} from '@angular/core';
import { NavController, } from '@ionic/angular';
import {Usuarios} from '../../modelos/usuarios';
import {EmpresaServicesService} from '../../servicios/empresa-services.service';
import {Observable} from 'rxjs';
import fetch from 'node-fetch';
import { AlertController } from '@ionic/angular';
import { promise } from 'protractor';
import { async } from '@angular/core/testing';
import { __await } from 'tslib';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
private password : string;
private user : string;
result_user : Observable<Usuarios>;
r : Observable<Usuarios>;
  constructor(public navCtrl: NavController,private serv :EmpresaServicesService,private alertCtrl: AlertController) { 

    
  }
 error="";
  ver_pass:string;
  type_pass:string;
   
 ngOnInit() {
   this.password="";
   this.user="";
  this.ver_pass="eye";
  this.type_pass="password"
  this.error="";

 }
 ver_password(){
   if(this.type_pass=="password"){
     this.ver_pass ="eye-off";
     this.type_pass="text";
   }else{
     this.ver_pass="eye";
     this.type_pass="password"
   }


 }

     presentLoading() {
      
      this.error="";
      let mostrar=0;
      this.result_user = this.serv.obtenerdatos_Usuarios_para_login(this.user);
     
      this.result_user.subscribe(result =>{
      
        if(result[0]==undefined){
          this.presentAlert("Usuario o Contraseña incorrecta");
              return ;
        }

  
      });

      this.result_user.forEach(element => {
       
        for (let key in element) {
          mostrar=1;
          console.log(element[key].user_name);
          
            if(element[key].password == this.password){
              
              if(element[key].active==0){ // usuario inanctivo

                this.presentAlert("El usuario no se encuentra activo");
                return ;
                
              }else{
  

               this.navCtrl.navigateForward(["/staff",element[key].id,element[key].user_name,element[key].type])
               
                 return;
            }
  
            }else{
              this.presentAlert("Usuario o Contraseña incorrecta");
              return ;

            }
          
        }
        
  
      });
      
  
     
  }

 async presentAlert(mensaje) {
    let alert = await this.alertCtrl.create({
      backdropDismiss:true,
     
      message:mensaje,

      
    });
    alert.present();
  }
  
}
