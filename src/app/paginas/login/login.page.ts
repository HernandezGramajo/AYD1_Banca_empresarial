import { Component,OnInit} from '@angular/core';
import { NavController, } from '@ionic/angular';
import {Usuarios} from '../../modelos/usuarios';
import {EmpresaServicesService} from '../../servicios/empresa-services.service';
import {Observable} from 'rxjs';
import fetch from 'node-fetch';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
private password : string;
private user : string;
result_user : Observable<Usuarios>;
  constructor(public navCtrl: NavController,private serv :EmpresaServicesService) { 

    
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

    presentLoading():void {
      this.error="";
      let mostrar=0;
      this.result_user = this.serv.obtenerdatos_Usuarios_para_login(this.user);
   
      this.result_user.forEach(element => {
       
        for (let key in element) {
          mostrar=1;
          console.log(element[key].user_name);
          
            if(element[key].password == this.password){
              
              if(element[key].active==0){ // usuario inanctivo
                
                
                return this.error ="El usuario no se encuentra activo";
                
              }else{
  
                this.error="";
               
                
                //MUTZ reivsa aqui
                console.log("entro")
                return this.navCtrl.navigateForward(["/staff",element[key].id,element[key].user_name,element[key].type]);
             
            }
  
            }else{
              this.error =" Contraseña incorrecta";
              return ;
            }
          
        }
        
  
      });
     
  
     
  }
  
}
