import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuarios} from '../modelos/usuarios';
import {Nominas} from '../modelos/nominas'


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
  obtenerdatos_Usuarios_para_login(user){
    this.url ="http://3.20.104.181:8099/api/usuarios?filter[where][user_name]="+user;
    return this.http.get<Usuarios>(this.url).pipe();

  }
  pagos_por_quincena( year, mont,quincena){
    this.url ="http://3.20.104.181:7099/api/nominas?filter[where][start_period]="+year+"-"+mont+"-"+quincena+"T00:00:00.000Z";
    return this.http.get<Nominas>(this.url).pipe();
  }

  

  Usuario_especifico(year,mont,quincena,user){
    
    this.url ="http://3.20.104.181:7099/api/nominas?filter[where][and][0][start_period]="+year+"-"+mont+"-"+quincena+"T00:00:00.000Z&filter[where][and][1][id_user]="+user;  
     return  this.http.get<Nominas>(this.url).pipe();
  }


}
