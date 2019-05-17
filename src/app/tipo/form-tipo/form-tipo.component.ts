import { Component, OnInit } from '@angular/core';

import { Tipo } from '../../models/tipo';
import { TipoService } from '../tipo.service';

@Component({
  selector: 'form-tipo',
  templateUrl: './form-tipo.component.html',
  styleUrls: ['./form-tipo.component.css']
})
export class FormTipoComponent implements OnInit {

  tipoList: Tipo[];
  tipo = new Tipo();
  constructor(private _tipoService: TipoService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this._tipoService.getTipo()
      .subscribe( (tipoData) => {
        this.tipoList = tipoData
      }, (error) => {
        console.log( error );
      });
  }

  addTipo(): void {
    this._tipoService.addTipo( this.tipo )
      .subscribe( (response) => {
        this.reset();
        this.getList();
      }
      , (error) => {
        console.log(error);
      });
  }

  deleteTipo( idTipo: string ) {
    this._tipoService.deleteTipo( idTipo )
      .subscribe( (response) => {
        this.getList();
      }, (error) => {
        console.log( error );
      });
  }

  getTipoById( idTipo: string ) {
    this._tipoService.getTipoById( idTipo )
        .subscribe( (tipoData) => {
            this.tipo = tipoData; this.getList(); 
          }, (error) => {
            console.log( error );
          })
  }

  private reset() {
    this.tipo.idTipo = null;
    this.tipo.dsTipo = null;
  }

}
