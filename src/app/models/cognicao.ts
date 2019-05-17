import { Tipo } from "./tipo";
import { Linguagem } from "./linguagem";
import { Categoria } from "./categoria";
import { Camada } from "./camada";

export class Cognicao {
    idCognicao: string;
    tipo: Tipo;
    categoria: Categoria;
    camada: Camada;
    linguagem: Linguagem;
    nmCognicao: string;
    dsCognicao: string;
    nmVersao: string;
    txCodigo: string;
    txObservacao: string;

}