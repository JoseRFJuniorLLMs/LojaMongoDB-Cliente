import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { Cor } from '../models/cor';

import { BaseResourceService } from '../services/BaseResourceService';

@Injectable({
  providedIn: 'root'
})
export class CorDataApiService extends BaseResourceService<Cor> {

  constructor(
    protected http: HttpClient,
    private authService: AuthService,
    protected injector: Injector
    ) {
    super('api/cors', injector, Cor.fromJson);
  }
/*

      cors: Observable<any>;
      cor: Observable<any>;

  public selectedCor: CorInterface = {
        _id: '', uuid: '', descricao: '', preco: '',
         durabilidade: '', peso: '', rotulagem: '', status: ''
  };

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE', 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    Authorization: this.authService.getToken()
  });

  getAllProdutos() {
    const url_api = `http://localhost:8080/cors`;
    return this.http.get(url_api);
  }
  getNotOffers() {
    const url_api = `http://localhost:8080/cors?filter[where][oferta]=0`;
    return this.http.get(url_api);
  }
  getProdutoById(id: string) {
    const url_api = `http://localhost:8080/cors/${id}`;
    return (this.cor = this.http.get(url_api));
  }

  getOffers() {
    const url_api = `http://localhost:8080/api/cors?filter[where][oferta]=1`;
    return (this.cors = this.http.get(url_api));
  }

  saveProduto(cor: ProdutoInterface) {
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    const url_api = `http://localhost:8080/api/cors?access_token=${token}`;
    return this.http
      .post<ProdutoInterface>(url_api, cor, {
        headers: this.headers
      })
      .pipe(map(data => data));
  }

  updateProduto(cor) {
    // TODO: obtener token
    // TODO: not null
    const corId = cor.corId;
    const token = this.authService.getToken();
    const url_api = `http://localhost:8080/api/cors/${corId}/?access_token=${token}`;
    return this.http
      .put<ProdutoInterface>(url_api, cor, {
         headers: this.headers
        })
      .pipe(map(data => data));
  }

  deleteProduto(id: string) {
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    console.log(token);
    const url_api = `http://localhost:8080/api/cors/${id}/?access_token=${token}`;
    return this.http
      .delete<ProdutoInterface>(url_api, {
         headers: this.headers
        })
      .pipe(map(data => data));
  } */
}
