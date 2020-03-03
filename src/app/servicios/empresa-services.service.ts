import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuarios} from '../modelos/usuarios';
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

}
