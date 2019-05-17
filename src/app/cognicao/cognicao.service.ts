import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { Linguagem } from '../models/linguagem';
import { Tipo } from '../models/tipo';
import { Cognicao } from '../models/cognicao';

@Injectable({
  providedIn: 'root'
})
export class CognicaoService {

  readonly URL = `${environment.url_base}`;

  constructor( private _httpService: Http ) { }

  getLinguagemList(): Observable<Linguagem[]> {
    return this._httpService.get( this.URL + '/linguagem' )
      .pipe( map( response => response.json() ), catchError( this.logError ) );
  }

  getTipoList(): Observable<Tipo[]> {
    return this._httpService.get( this.URL + '/tipo')
      .pipe( map( response => response.json() ), catchError( this.logError ) );
  }

  getList(): Observable<Cognicao[]> {
    return this._httpService.get( this.URL + '/cognicao' )
      .pipe( map( cognicaoData => cognicaoData.json()), catchError( this.logError ) );
  }

  addCognicao( cognicao: Cognicao ) {
    let body = JSON.stringify( cognicao );
    let headers = new Headers( { 'Content-Type': 'application/json' } );
    let options = new RequestOptions( { headers: headers } );

    if( cognicao.idCognicao ) {
      return this._httpService.put( this.URL + '/cognicao/' + cognicao.idCognicao, body, options );
    } else {
      return this._httpService.post( this.URL + '/cognicao', body, options );
    }
  }

  deleteCognicao( idCognicao: string ) {
    return this._httpService.delete( this.URL + '/cognicao/' + idCognicao );
  }

  getCognicaoPorId( idCognicao: string ) {
    return this._httpService.get( this.URL + '/cognicao/' + idCognicao )
      .pipe ( map( response => response.json() ), catchError( this.logError ) );
  }

  private logError( error: Response ) {
    return Observable.throw( error );
  }

}
