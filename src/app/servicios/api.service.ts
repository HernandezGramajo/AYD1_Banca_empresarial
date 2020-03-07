import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Usuarios } from '../modelos/usuarios';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Nominas } from '../modelos/nominas';
import { Tipo_Nomina } from '../modelos/tipo_nomina';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Path
  base_path = 'http://3.20.104.181:8099/api/usuarios';
  base_path_2 = 'http://3.20.104.181:7099/api/nominas';
  base_path_3 = 'http://3.20.104.181:6099/api/tipoNominas';

  constructor(private http: HttpClient) { }

  //Opciones
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

  getAll() : Observable<Usuarios>{
    return this.http
    .get<Usuarios>(this.base_path)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  getItem(itemID) : Observable<Usuarios>{
    return this.http
    .get<Usuarios>(this.base_path+"/"+itemID)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  createItem(item): Observable<Usuarios>{
    return this.http
    .post<Usuarios>(this.base_path, JSON.stringify(item), this.httpOptions)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  updateItem(itemID, item) : Observable<Usuarios>{
    return this.http
    .put<Usuarios>(this.base_path+"/"+itemID, JSON.stringify(item),this.httpOptions)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  getAllNominas() : Observable<Nominas>{
    return this.http
    .get<Nominas>(this.base_path_2)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }
  
    getItemNomina(itemID) : Observable<Nominas>{
    return this.http
    .get<Nominas>(this.base_path_3+"/"+itemID)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  getItemNominas(itemID) : Observable<Nominas>{
    return this.http
    .get<Nominas>(this.base_path_2+"?filter[where][id_user]="+itemID)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }
  
    getAllTipoNominas() : Observable<Tipo_Nomina>{
    return this.http
    .get<Tipo_Nomina>(this.base_path_3)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }
  
  
    getItemNominas(itemID) : Observable<Usuarios>{
    return this.http
    .get<Usuarios>(this.base_path+"/"+itemID)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  createItemNominas(item): Observable<Usuarios>{
    return this.http
    .post<Usuarios>(this.base_path, JSON.stringify(item), this.httpOptions)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  updateItemNominas(itemID, item) : Observable<Usuarios>{
    return this.http
    .put<Usuarios>(this.base_path+"/"+itemID, JSON.stringify(item),this.httpOptions)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }
  

  getItemNominasMes(){

  }

  getItemNominasAnio(itemID, itemANIO : number) : Observable<Nominas>{
    var anioMin = (Number(itemANIO) - 1);
    console.log(anioMin);
    var anioMax = (Number(itemANIO) + 1);
    console.log(anioMax);
    return this.http
    .get<Nominas>(this.base_path_2+"?filter[where][and][0][id_user]="+itemID+"&filter[where][and][1][start_period][gt]="+(anioMin)+"-12-31&filter[where][and][2][end_period][lt]="+(anioMax)+"-01-01")
  }

  getItemNominasMesAnio(itemID, itemMES : number, itemANIO : number) : Observable<Nominas>{
    if(itemMES == 1){
      var anioMin = (Number(itemANIO) - 1);
      console.log(anioMin);
      var maximo = (Number(itemMES) + 1);
      console.log(maximo);
      return this.http
      .get<Nominas>(this.base_path_2+"?filter[where][and][0][id_user]="+itemID+"&filter[where][and][1][start_period][gt]="+(anioMin)+"-12-31&filter[where][and][2][end_period][lt]="+(itemANIO)+"-"+(maximo)+"-01")
      .pipe(/*retry(2),*/catchError(this.handleError)/**/)
    }else if(itemMES == 3){
      var minimo = (Number(itemMES) - 1);
      console.log(minimo);
      var maximo = (Number(itemMES) + 1);
      console.log(maximo);
      return this.http
      .get<Nominas>(this.base_path_2+"?filter[where][and][0][id_user]="+itemID+"&filter[where][and][1][start_period][gt]="+(itemANIO)+"-"+(minimo)+"-29&filter[where][and][2][end_period][lt]="+(itemANIO)+"-"+(maximo)+"-01")
      .pipe(/*retry(2),*/catchError(this.handleError)/**/)
    }else if(itemMES == 12){
      var minimo = (Number(itemMES) - 1);
      console.log(minimo);
      var anioMax = (Number(itemANIO) + 1);
      console.log(anioMax);
      return this.http
      .get<Nominas>(this.base_path_2+"?filter[where][and][0][id_user]="+itemID+"&filter[where][and][1][start_period][gt]="+(itemANIO)+"-"+(minimo)+"-31&filter[where][and][2][end_period][lt]="+(anioMax)+"-01-01")
      .pipe(/*retry(2),*/catchError(this.handleError)/**/)
    }else{
      var minimo = (Number(itemMES) - 1);
      console.log(minimo);
      var maximo = (Number(itemMES) + 1);
      console.log(maximo);
      return this.http
      .get<Nominas>(this.base_path_2+"?filter[where][and][0][id_user]="+itemID+"&filter[where][and][1][start_period][gt]="+(itemANIO)+"-"+(minimo)+"-31&filter[where][and][2][end_period][lt]="+(itemANIO)+"-"+(maximo)+"-01")
      .pipe(/*retry(2),*/catchError(this.handleError)/**/)
    }
  }

}