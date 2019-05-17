import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormTipoComponent } from './tipo/form-tipo/form-tipo.component';
import { TipoService } from './tipo/tipo.service';
import { AppRoutesModulo } from './app.routes.modulo';
import { FormLinguagemComponent } from './linguagem/form-linguagem/form-linguagem.component';
import { FormCognicaoComponent } from './cognicao/form-cognicao/form-cognicao.component';
import { FormCategoriaComponent } from './categoria/form-categoria/form-categoria.component';
import { FormCamadaComponent } from './camada/form-camada/form-camada.component';


@NgModule({
  declarations: [
    AppComponent,
    FormTipoComponent,
    FormLinguagemComponent,
    FormCognicaoComponent,
    FormCategoriaComponent,
    FormCamadaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutesModulo
  ],
  providers: [TipoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
