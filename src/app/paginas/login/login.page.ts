import { Component, OnInit } from '@angular/core';

import fetch from 'node-fetch';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
private password : LoginPage
private user : LoginPage
  constructor() { }

  ngOnInit() {

   
  }
    presentLoading() {
    const loading = document.createElement('ion-loading');
    loading.message = 'Por Favor Espere...';
    loading.duration = 1000;
    loading.present();
    console.log(this.password);
    console.log(this.user);
    
    document.body.appendChild(loading);
  
    let  pass = this.password;;
    fetch('http://3.20.104.181:8099/api/usuarios?filter[where][user_name]='+this.user)
    .then(res=> res.json())
    .then(
      
         
      function(json){
      
        if(json==""){ // si no exite el usuario y json no trae nada
          console.log("no exite el usuario");
        
        }else{
          if (json[0].password == pass){
            console.log("si es igual");
  
          }else{
  
            console.log("no es igual");
          
          }
        
        }
             
       
    });

  }
  
}
