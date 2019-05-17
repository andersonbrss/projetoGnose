import { Component, OnInit } from '@angular/core';

import { CognicaoService } from '../cognicao.service';
import { Tipo } from '../../models/tipo';
import { Linguagem } from '../../models/linguagem';
import { Cognicao } from '../../models/cognicao';
import { CategoriaService } from '../../categoria/categoria.service';
import { Categoria } from '../../models/categoria';
import { Camada } from '../../models/camada';
import { CamadaService } from '../../camada/camada.service';


@Component({
  selector: 'form-cognicao',
  templateUrl: './form-cognicao.component.html',
  styleUrls: ['./form-cognicao.component.css']
})
export class FormCognicaoComponent implements OnInit {

  tipoList: Tipo[];
  linguagemList: Linguagem[];
  cognicaoList: Cognicao[];
  categoriaList: Categoria[];
  camadaList: Camada[];

  cognicao = new Cognicao();

  constructor( private _cognicaoService : CognicaoService, private _categoriaService: CategoriaService, private _camadaService: CamadaService ) { }

  ngOnInit() {
    this.getTipoList();
    this.getLinguagemList();
    this.getList();
    this.getCategoriaList();
    this.getCamadaList();
  }

  getCamadaList(): void {
    this._camadaService.getCamadaList()
      .subscribe( camadaData => {
        this.camadaList = camadaData;
      }, (error) => {
        console.log( error );
      })
  }

  getTipoList(): void {
    this._cognicaoService.getTipoList()
      .subscribe( ( tipoData ) => {
        this.tipoList = tipoData
      }, (error) => {
        console.log( error );
      });
  }

  getLinguagemList(): void {
    this._cognicaoService.getLinguagemList()
      .subscribe( ( linguagemData ) => {
        this.linguagemList = linguagemData
      }, ( error ) => {
        console.log( error )
      });
  }

  getCategoriaList(): void {
    this._categoriaService.getList()
      .subscribe( (categoriaData) => {
        this.categoriaList = categoriaData;
      }, (error) => {
        console.log( error );
      });
  }

  getList(): void {
    this._cognicaoService.getList()
      .subscribe( (cognicaoData) => {
        this.cognicaoList = cognicaoData
      }, ( error ) => {
        console.log( error );
        
      });
  }

  addCognicao(): void {
    this._cognicaoService.addCognicao( this.cognicao )
      .subscribe( (response) => {
        this.reset();
        this.getList();
      }, (error) => {
        console.log( error );
      })
  }

  deleteCognicao( idCognicao: string ): void {
    this._cognicaoService.deleteCognicao( idCognicao )
      .subscribe( (response) => {
        this.getList();
      }, (error) => {
        console.log( error );
      })
  }

  getCognicaoPorId( idCognicao: string ): void {
    this._cognicaoService.getCognicaoPorId( idCognicao )
      .subscribe( (cognicaoData) => {
        this.cognicao = cognicaoData;
      }, (error) => {
        console.log( error );
      })
  }

  compareTipo(a, b) {
    return a && b && a.idTipo == b.idTipo;
  }

  compareLinguagem(a, b) {
    return a && b && a.idLinguagem == b.idLinguagem;
  }

  compareCategoria(a, b) {
    return a && b && a.idCategoria == b.idCategoria;
  }
  compareCamada(a, b) {
    return a && b && a.idCamada == b.idCamada;
  }

  private reset(): void {
    this.cognicao.idCognicao = null;
    this.cognicao.dsCognicao = null;
    this.cognicao.linguagem = null;
    this.cognicao.nmCognicao = null;
    this.cognicao.nmVersao = null;
    this.cognicao.tipo = null;
    this.cognicao.txCodigo = null;
    this.cognicao.txObservacao = null;
    this.cognicao.categoria = null;
    this.cognicao.camada = null;
  }
}
