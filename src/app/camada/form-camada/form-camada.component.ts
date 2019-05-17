import { Component, OnInit } from '@angular/core';

import { Camada } from '../../models/camada';
import { CamadaService } from '../camada.service';

@Component({
  selector: 'form-camada',
  templateUrl: './form-camada.component.html',
  styleUrls: ['./form-camada.component.css']
})
export class FormCamadaComponent implements OnInit {

  camadaList: Camada[];
  camada = new Camada();

  constructor( private _camadaService: CamadaService) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this._camadaService.getCamadaList()
      .subscribe( (camadaData) => {
        this.camadaList = camadaData;
      }, (error) => {
        console.log( error );
      });
  }

  addCamada(): void {
    this._camadaService.addCamada( this.camada )
      .subscribe( response => {
        this.reset();
        this.getList();
      }, (error) => {
        console.log( error );
      });
  }

  deleteCamada( idCamada: string ): void {
    this._camadaService.deleteCamada( idCamada )
      .subscribe( respose => {
        this.getList();
      }, (error) => {
        console.log( error );
      });
  }

  getCamadaPorId( idCamada: string ): void {
    this._camadaService.getCamadaPorId( idCamada )
      .subscribe( response => {
        this.camada = response;
      }, (error) => {
        console.log( error );
      })
  }

  reset(): void {
    this.camada.idCamada = null;
    this.camada.dsCamada = null;
  }
}
