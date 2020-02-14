import { Component, OnInit } from '@angular/core';

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
    
   
  }
  
}
