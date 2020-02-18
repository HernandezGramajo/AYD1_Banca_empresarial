import { Component} from '@angular/core';
import { NavController, } from '@ionic/angular';
import fetch from 'node-fetch';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
private password : LoginPage;
private user : LoginPage;

  constructor(public navCtrl: NavController) { 

    
  }
 error="";

    presentLoading():void {
      
      
    
    const loading = document.createElement('ion-loading');
    loading.message = 'Por Favor Espere...';
    loading.duration = 1000;
    
    document.body.appendChild(loading);
    loading.present();
    let  pass = this.password;
   
       fetch('http://3.20.104.181:8099/api/usuarios?filter[where][user_name]='+this.user)
        .then(res=> res.json())
        .then(json => {
         
            if(json==""){ // si no exite el usuario y json no trae nada
              
              this.error ="El usuario no existe";
            }else{
              if (json[0].password == pass){

                if(json[0].active=="0"){ // usuario inanctivo
                  this.error ="El usuario no se encuentra activo";
                }else{

                  this.error="";
                  //MUTZ reivsa aqui
                  this.navCtrl.navigateForward(["/staff",json[0].id,json[0].user_name,json[0].type]);
                
              }
      
              }else{
                console.log("4");
                this.error ="Contraseña incorrecata";
              }
            
            }
                
          
        })
        .catch(err => {
          this.error ="Nuestros servidores se encuentra en mantenimiento, por favor inténtelo más tarde";
      });;

   
  }
  
}
