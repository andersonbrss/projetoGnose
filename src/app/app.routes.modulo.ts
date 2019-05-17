import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { FormTipoComponent } from "./tipo/form-tipo/form-tipo.component";
import { FormLinguagemComponent } from "./linguagem/form-linguagem/form-linguagem.component";
import { FormCognicaoComponent } from "./cognicao/form-cognicao/form-cognicao.component";
import { FormCategoriaComponent } from "./categoria/form-categoria/form-categoria.component";
import { FormCamadaComponent } from "./camada/form-camada/form-camada.component";

const appRoutes: Routes = [  
    { path: 'tipo', component: FormTipoComponent },
    { path: 'linguagem', component: FormLinguagemComponent },
    { path: 'cognicao', component: FormCognicaoComponent },
    { path: 'categoria', component: FormCategoriaComponent },
    { path: 'camada', component: FormCamadaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutesModulo {

}