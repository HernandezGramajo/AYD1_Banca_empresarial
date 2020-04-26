import { Injectable } from '@angular/core';
import {Nominas} from '../modelos/nominas'
import {Constancia} from '../modelos/constancia';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Usuarios } from '../modelos/usuarios';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmpresaServicesService {

  private  url: string; 
  
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Error:', error.error.message);
    }else{
      console.error(
        `Codigo de Error: ${error.status}, `+
        `cuerpo del error: ${error.error}`
      );
    }
    return throwError(
      'Algo salio muy mal.'
    );
  };

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

  base_path_5 = 'http://3.20.104.181:1447/api/constancia';
  
  Obtener_constancias(){
    
    this.url ='http://3.20.104.181:1447/api/constancia';  
     return  this.http.get<Constancia>(this.url).pipe();
  }
  update_constancia(id, contancia)  {
    this.url ='http://3.20.104.181:1447/api/constancia/'+id; 
    console.log(id + " \n" + JSON.stringify(contancia))
    return this.http
    .put<void>(this.url, JSON.stringify(contancia),this.httpOptions)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

 
}
