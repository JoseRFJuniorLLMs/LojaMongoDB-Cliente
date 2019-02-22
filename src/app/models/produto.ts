import { Grupo } from './grupo';
import { Cor } from './cor';
import { Marca } from './marca';
import { BaseResourceModel } from './baseresourcemodel';

export class Produto extends BaseResourceModel {
  constructor(
    public _id?: string,
    public uuid?: string,
    public descricao?: string,
    public preco?: string,
    public embalagem?: string,
    public durabilidade?: string,
    public peso?: string,
    public rotulagem?: string,
    public status?: string,
    public grupo?: Grupo,
    public cor?: Cor,
    public marca?: Marca,
    public imagem?: string,
  ) {
    super();
  }
  static fromJson(jsonData: any): Produto {
    return Object.assign(new Produto(), jsonData);
  }
}