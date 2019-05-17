import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Tipo } from '../models/tipo';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  url = 'http://localhost:8080/gnose';
  constructor( private _httpService: Http ) { }

  getTipo(): Observable<Tipo[]> {
    return this._httpService.get(this.url + '/tipo')
      .pipe( map( response => response.json()), catchError( this.handleError));
  }

  private handleError( error : Response ) {
    return Observable.throw( error );
  }

  addTipo( tipo: Tipo) {
    let body = JSON.stringify(tipo);
    let headers = new Headers( {'Content-Type': 'application/json'} );
    let options = new RequestOptions( {headers: headers} );
    if( tipo.idTipo ) {
      return this._httpService.put( this.url + '/tipo/' + tipo.idTipo, body, options );
    } else {
      return this._httpService.post( this.url + '/tipo', body, options );
    }
  }

  deleteTipo( idTipo: string ) {
    return this._httpService.delete( this.url + '/tipo/' + idTipo);
  }

  getTipoById( idTipo: string): Observable<Tipo> {
    return this._httpService.get(this.url + '/tipo/' + idTipo)
        .pipe( map( response => response.json() ), catchError( this.handleError ) );
  }

}
