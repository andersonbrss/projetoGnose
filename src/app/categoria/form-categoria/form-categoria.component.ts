import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../categoria.service';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css']
})
export class FormCategoriaComponent implements OnInit {

  categoriaList: Categoria[];
  categoria = new Categoria();

  constructor( private _categoriaService: CategoriaService ) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this._categoriaService.getList()
      .subscribe( (categoriaData) => {
        this.categoriaList = categoriaData;
      }, (error) => {
        console.log( error );
      });
  }

  addCategoria(): void {
    this._categoriaService.addCategoria( this.categoria )
      .subscribe( (categoriaData) => {
        this.reset();
        this.getList();
      }, (error) => {
        console.log( error );
      });
  }

  deleteCategoria( idCategoria: string ) {
    this._categoriaService.deleteCategoria( idCategoria )
      .subscribe( (respose) => {
        this.getList();
      }, (error) => {
        console.log( error );
      });
  }

  getCategoriaPorId( idCategoria: string ): void {
    this._categoriaService.getCategoriaPorId( idCategoria )
      .subscribe( (categoriaData) => {
        this.categoria = categoriaData;
      }, (error) => {
        console.log( error );
      });
  }

  reset(): void {
    this.categoria.idCategoria = null;
    this.categoria.dsCategoria = null;
  }

}
