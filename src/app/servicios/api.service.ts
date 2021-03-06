import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Usuarios } from '../modelos/usuarios';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Nominas } from '../modelos/nominas';
import { Beneficios } from '../modelos/beneficios';
import { Tipo_Nomina } from '../modelos/tipo_nomina';
import { Prestamos } from '../modelos/prestamos';
import { LogCambios } from '../modelos/log-cambios';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Path
  base_path = 'http://3.20.104.181:8099/api/usuarios';
  base_path_2 = 'http://3.20.104.181:7099/api/nominas';
  base_path_3 = 'http://3.20.104.181:6099/api/tipoNominas';
  base_path_4 = 'http://3.20.104.181:5099/api/prestamos';
  base_path_5 = 'http://3.20.104.181:3103/api/beneficios';
  base_path_6 = 'http://3.20.104.181:2004/api/bitacoras';
  
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
    .get<Nominas>(this.base_path_2+"/"+itemID)
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
  
  createItemNominas(item): Observable<Nominas>{
    return this.http
    .post<Nominas>(this.base_path_2, JSON.stringify(item), this.httpOptions)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  updateItemNominas(itemID, item) : Observable<Nominas>{
    return this.http
    .put<Nominas>(this.base_path_2+"/"+itemID, JSON.stringify(item),this.httpOptions)
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


  //para solicitud Prestamos

  createItemPrestamo(item): Observable<Prestamos>{
    return this.http
    .post<Prestamos>(this.base_path_3, JSON.stringify(item), this.httpOptions)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  getAllPrestamos(itemID) : Observable<Prestamos>{
    return this.http
    .get<Prestamos>(this.base_path_4+"?filter[where][id_user]="+itemID)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  getPrestamo(itemID) : Observable<Prestamos>{
    return this.http
    .get<Prestamos>(this.base_path_4+"/"+itemID)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  getAllPrestamossinID() : Observable<Prestamos[]>{
    return this.http
    .get<Prestamos[]>(this.base_path_4)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  getNominasCliente(itemID) : Observable<Nominas[]>{
    return this.http
    .get<Nominas[]>(this.base_path_2+"?filter[where][id_user]="+itemID)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  updateItemPrestamo(itemID, item) : Observable<Prestamos>{
    return this.http
    .put<Prestamos>(this.base_path_4+"/"+itemID, JSON.stringify(item),this.httpOptions)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  ///////////////////////////////BASE PATH 5 : BENEFICIOS////////////////////////////////////////////
  getAllBeneficios() : Observable<Beneficios>{
    return this.http
    .get<Beneficios>(this.base_path_5)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  
  getItemBeneficios(itemID) : Observable<Beneficios>{
    return this.http
    .get<Beneficios>(this.base_path_5+"/"+itemID)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  createItemBeneficios(item): Observable<Beneficios>{
    return this.http
    .post<Beneficios>(this.base_path_5, JSON.stringify(item), this.httpOptions)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  updateItemBeneficios(itemID, item) : Observable<Beneficios>{
    return this.http
    .put<Beneficios>(this.base_path_5+"/"+itemID, JSON.stringify(item),this.httpOptions)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }
  deleteItemBeneficios(itemID, item) : Observable<Beneficios>{
    return this.http
    .delete<Beneficios>(this.base_path_5+"/"+itemID)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

///////////////////////////////BASE PATH 6 : BITACORA/LOG DE CAMBIOS////////////////////////////////////////////

  getAllLog() : Observable<LogCambios>{
    return this.http
    .get<LogCambios>(this.base_path_6)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }
  
  
  getItemLog(itemID) : Observable<LogCambios>{
    return this.http
    .get<LogCambios>(this.base_path_6+"/"+itemID)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }
  
  
  getItemLogAnio(itemID, itemANIO : number) : Observable<LogCambios>{
    var anioMin = (Number(itemANIO) - 1);
    console.log(anioMin);
    var anioMax = (Number(itemANIO) + 1);
    console.log(anioMax);
    return this.http
    .get<LogCambios>(this.base_path_6+"?filter[where][id_entrada]="+itemID)
  }
  
  getItemLogMesAnio(itemID, itemMES : number, itemANIO : number) : Observable<LogCambios>{
    if(itemMES == 1){
      var anioMin = (Number(itemANIO) - 1);
      console.log(anioMin);
      var maximo = (Number(itemMES) + 1);
      console.log(maximo);
      return this.http
      .get<LogCambios>(this.base_path_6+"?filter[where][id_entrada]="+itemID)
      .pipe(/*retry(2),*/catchError(this.handleError)/**/)
    }


    else if(itemMES == 3){
      var minimo = (Number(itemMES) - 1);
      console.log(minimo);
      var maximo = (Number(itemMES) + 1);
      console.log(maximo);
      return this.http
      .get<LogCambios>(this.base_path_6+"?filter[where][id_entrada]="+itemID)
      .pipe(/*retry(2),*/catchError(this.handleError)/**/)
    }


    else if(itemMES == 12){
      var minimo = (Number(itemMES) - 1);
      console.log(minimo);
      var anioMax = (Number(itemANIO) + 1);
      console.log(anioMax);
      return this.http
      .get<LogCambios>(this.base_path_6+"?filter[where][id_entrada]="+itemID)
      .pipe(/*retry(2),*/catchError(this.handleError)/**/)
    }


    else{
      var minimo = (Number(itemMES) - 1);
      console.log(minimo);
      var maximo = (Number(itemMES) + 1);
      console.log(maximo);
      return this.http
      .get<LogCambios>(this.base_path_6+"?filter[where][id_entrada]="+itemID)
      .pipe(/*retry(2),*/catchError(this.handleError)/**/)
    }


  }
  
///////////////////////////////BASE PATH 6 : BITACORA/LOG DE CAMBIOS////////////////////////////////////////////

}





