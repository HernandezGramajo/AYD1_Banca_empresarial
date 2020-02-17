import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Usuarios } from '../modelos/usuarios';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Path
  base_path = 'http://3.20.104.181:8099/api/usuarios';

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

  createItem(item): Observable<Usuarios>{
    return this.http
    .post<Usuarios>(this.base_path, JSON.stringify(item), this.httpOptions)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }
}
