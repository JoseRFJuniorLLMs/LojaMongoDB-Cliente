import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
//import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { flatMap, catchError, map } from 'rxjs/operators';

import { ProdutoInterface } from '../models/produto-interface';
import { AuthService } from './auth.service';
import { CorDataApiService } from './cor-data-api.service';
import { Produto } from '../models/produto';

import { BaseResourceService } from '../services/BaseResourceService';

@Injectable({
  providedIn: 'root'
})
export class ProdutoDataApiService extends BaseResourceService<Produto> {

  constructor(
    protected injector: Injector,
    protected http: HttpClient,
    private corDataApiService: CorDataApiService,
    private authService: AuthService
    ) {
   super('api/produtos', injector, Produto.fromJson);
 }

  produtos: Observable<any>;
  produto: Observable<any>; 
  
  public selectedProduto: ProdutoInterface = {
        _id: '', uuid: '', descricao: '', preco: '',
         durabilidade: '', peso: '', rotulagem: '', status: ''
  };

  create(produto: Produto): Observable<Produto> {
    return this.setCorAndSendToServer(produto, super.create.bind(this));
  }

  update(produto: Produto): Observable<Produto> {
    return this.setCorAndSendToServer(produto, super.update.bind(this));
  }

  private setCorAndSendToServer(produto: Produto, sendFn: any): Observable<Produto> {
    return this.corDataApiService.getById(produto._id).pipe(
      flatMap(cor => {
        produto.cor = cor;
        return sendFn(produto);
      }),
      catchError(this.handleError)
    );
  }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE', 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    Authorization: this.authService.getToken()
  });

  getAllProdutos() {
    const url_api = `http://localhost:8080/produtos`;
    return this.http.get(url_api);
  }
  getNotOffers() {
    const url_api = `http://localhost:8080/produtos?filter[where][oferta]=0`;
    return this.http.get(url_api);
  }
  getProdutoById(id: string) {
    const url_api = `http://localhost:8080/produtos/${id}`;
    return (this.produto = this.http.get(url_api));
  }

  getOffers() {
    const url_api = `http://localhost:8080/api/produtos?filter[where][oferta]=1`;
    return (this.produtos = this.http.get(url_api));
  }

  saveProduto(produto: ProdutoInterface) {
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    const url_api = `http://localhost:8080/api/produtos?access_token=${token}`;
    return this.http
      .post<ProdutoInterface>(url_api, produto, { 
        headers: this.headers 
      })
      .pipe(map(data => data));
  }

  updateProduto(produto) {
    // TODO: obtener token
    // TODO: not null
    const produtoId = produto.produtoId;
    const token = this.authService.getToken();
    const url_api = `http://localhost:8080/api/produtos/${produtoId}/?access_token=${token}`;
    return this.http
      .put<ProdutoInterface>(url_api, produto, {
         headers: this.headers 
        })
      .pipe(map(data => data));
  }

  deleteProduto(id: string) {
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    console.log(token);
    const url_api = `http://localhost:8080/api/produtos/${id}/?access_token=${token}`;
    return this.http
      .delete<ProdutoInterface>(url_api, {
         headers: this.headers 
        })
      .pipe(map(data => data));
  }
}
