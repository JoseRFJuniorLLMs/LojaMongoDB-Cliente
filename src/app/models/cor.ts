import { BaseResourceModel } from '../models/baseresourcemodel';

export class Cor extends BaseResourceModel {
  constructor(
    public id?: string,
    public nome?: string,
  ) {
    super();
  }
  static fromJson(jsonData: any): Cor {
    return Object.assign(new Cor(), jsonData);
  }
}
