import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Categoria } from '../models/categoria';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  readonly URL = `${environment.url_base}/categoria`;

  categoria = new Categoria();

  constructor( private _httpService: Http ) { }

  getList(): Observable<Categoria[]> {
    return this._httpService.get( this.URL )
      .pipe( map( response => response.json() ), catchError( this.logErro ) );
  }

  addCategoria( categoria: Categoria ) {
    let body = JSON.stringify( categoria );
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions( { headers: headers } );

    if( categoria.idCategoria ) {
      return this._httpService.put( this.URL + '/' + categoria.idCategoria, body, options );
    } else {
      return this._httpService.post( this.URL, body, options );
    }
  }

  deleteCategoria( idCategoria: string ) {
    return this._httpService.delete( this.URL + '/' + idCategoria );
  }

  getCategoriaPorId( idCategoria: string ) {
    return this._httpService.get( this.URL + '/' + idCategoria )
      .pipe( map( categoriaData => categoriaData.json() ), catchError( this.logErro ) );
  }

  private logErro ( error : Response ) {
    return Observable.throw( error );
  }

}
