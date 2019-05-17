import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Linguagem } from '../models/linguagem';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinguagemService {

  readonly URL = `${environment.url_base}`;

  constructor( private _httpService: Http ) { }

  getLinguagem(): Observable<Linguagem[]> {
    return this._httpService.get( this.URL + '/linguagem' )
      .pipe( map( response => response.json()), catchError( this.logErro ) );
  }

  private logErro ( error : Response ) {
    return Observable.throw( error );
  }

  addLinguagem( linguagem: Linguagem ) {
    let body = JSON.stringify( linguagem );
    let headers = new Headers ( { 'Content-Type': 'application/json' } );
    let options = new RequestOptions( { headers: headers } );

    if( linguagem.idLinguagem ) {
      return this._httpService.put( this.URL + '/linguagem/' + linguagem.idLinguagem, body, options );
    } else {
      return this._httpService.post( this.URL + '/linguagem', body, options );
    }
  }

  deleteLinguagem( idLinguagem: string ) {
    return this._httpService.delete( this.URL + '/linguagem/' + idLinguagem );
  }
  
  getLinguagemPorId( idLinguagem: string ): Observable<Linguagem> {
    return this._httpService.get( this.URL + '/linguagem/' + idLinguagem )
      .pipe( map( response => response.json()), catchError( this.logErro ) );
  }
}
