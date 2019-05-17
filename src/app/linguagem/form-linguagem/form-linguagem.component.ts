import { Component, OnInit } from '@angular/core';

import { Linguagem } from '../../models/linguagem';
import { LinguagemService } from '../linguagem.service';

@Component({
  selector: 'form-linguagem',
  templateUrl: './form-linguagem.component.html',
  styleUrls: ['./form-linguagem.component.css']
})
export class FormLinguagemComponent implements OnInit {

  linguagemList: Linguagem[];
  linguagem = new Linguagem();

  constructor( private _linguagemService: LinguagemService) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this._linguagemService.getLinguagem()
      .subscribe( (linguagemData) => {
        this.linguagemList = linguagemData
      }, (error) => {
        console.log( error );
      });
  }

  addLinguagem(): void {
    this._linguagemService.addLinguagem( this.linguagem )
      .subscribe( (response) => {
        this.reset();
        this.getList();
      }, (error) => {
        console.log( error );
      });
  }

  deleteLinguagem( idLinguagem: string): void {
    this._linguagemService.deleteLinguagem( idLinguagem )
      .subscribe( (response) => {
        this.getList();
      }, (error) => {
        console.log( error );
      });
  }

  getLinguagemPorId( idLinguagem: string ): void {
    this._linguagemService.getLinguagemPorId( idLinguagem )
      .subscribe( (linguagemData) => {
        this.linguagem = linguagemData;
      }, (error) => {
        console.log( error );
      });
  }

  private reset() {
    this.linguagem.idLinguagem = null;
    this.linguagem.nmLinguagem = null;
  }

}
