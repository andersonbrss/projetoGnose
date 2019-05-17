import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Camada } from '../models/camada';


@Injectable({
  providedIn: 'root'
})
export class CamadaService {

  readonly URL = `${environment.url_base}/camada`;

  constructor( private _httpService: Http ) { }

  getCamadaList(): Observable<Camada[]> {
    return this._httpService.get( this.URL )
      .pipe( map( camadaData => camadaData.json()), catchError( this.logErro ) );
  }

  addCamada( camada: Camada ) {
    let body = JSON.stringify( camada );
    let headers = new Headers( {'Content-Type' : 'application/json'} );
    let options = new RequestOptions( { headers: headers });

    if( camada.idCamada ) {
      return this._httpService.put( this.URL, body, options );
    } else {
      return this._httpService.post( this.URL, body, options );
    }
  }

  deleteCamada( idCamada: string ) {
    return this._httpService.delete( this.URL + '/' + idCamada );
  }

  getCamadaPorId( idCamada: string ) {
    return this._httpService.get( this.URL + '/' + idCamada )
      .pipe( map( response => response.json()), catchError( this.logErro) );
  }

  private logErro ( error : Response ) {
    return Observable.throw( error );
  }

}
