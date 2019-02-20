import { Grupo } from './grupo';
import { Cor } from './cor';
import { Marca } from './marca';
export class Produto {
    _id: string;
    uuid: string;
    descricao: string;
    preco: string;
    embalagem: string;
    durabilidade: string;
    peso: string;
    rotulagem: string;
    status: string;
    grupo: Grupo;
    cor: Cor;
    marca: Marca;
    imagem: string;
  }