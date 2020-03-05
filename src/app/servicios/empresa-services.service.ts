import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuarios} from '../modelos/usuarios';
import {Pago_nominas} from '../modelos/nominas_pagos'
@Injectable({
  providedIn: 'root'
})
export class EmpresaServicesService {

  private  url: string; 
  constructor(private http: HttpClient) { }

  obtenerdatos_Usuarios(){
    this.url ="http://3.20.104.181:8099/api/usuarios?filter[where][id][gt]=1";
    return this.http.get<Usuarios>(this.url).pipe();

  }
  pago_primera_quincena( year, mont){
    this.url ="http://3.20.104.181:7099/api/nominas?filter[where][start_period]="+year+"-"+mont+"-01T00:00:00.000Z";
    return this.http.get<Pago_nominas>(this.url).pipe();
  }

  pago_segunda_quincena( year, mont){
    this.url ="http://3.20.104.181:7099/api/nominas?filter[where][start_period]="+year+"-"+mont+"-15T00:00:00.000Z";
    return this.http.get<Pago_nominas>(this.url).pipe();
  }

  Usuario_especifico(user){
    
    this.url ="http://3.20.104.181:7099/api/nominas?filter[where][and][0][start_period]=2020-02-01T00:00:00.000Z&filter[where][and][1][id_user]="+user;
    console.log(this.url);
    return this.http.get<Pago_nominas>(this.url).pipe();

  }

}
