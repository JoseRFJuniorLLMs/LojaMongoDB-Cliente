import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { flatMap, catchError, map } from 'rxjs/operators';

import { ProdutoInterface } from '../../models/produto-interface';
import { Cor } from 'src/app/models/cor';
import { Produto } from 'src/app/models/produto';

import { AuthService } from '../../services/auth.service';
import { BaseResourceService } from 'src/app/services/BaseResourceService';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends BaseResourceService<Produto> {

  constructor(
      protected injector: Injector,
      protected http: HttpClient,
      protected authService: AuthService) {
        super('api/produtos', injector, Produto.fromJson);
       }

      produtos: Observable<any>;
      produto: Observable<any>;

  public selectedProduto: ProdutoInterface = {
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
    const url_api = `http://localhost:8080/api/produtos`;
    return this.http.get(url_api);
  }
  getNotOffers() {
    const url_api = `http://localhost:8080/api/produtos?filter[where][oferta]=0`;
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
/* 
  create(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.create.bind(this));
  }

  update(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.update.bind(this))
  }

  getByMonthAndYear(month: number, year: number): Observable<Entry[]> {
    return this.getAll().pipe(
      map(entries => this.filterByMonthAndYear(entries, month, year))
    )
  }

  private setCategoryAndSendToServer(entry: Entry, sendFn: any): Observable<Entry>{
    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category => {
        entry.category = category;
        return sendFn(entry)
      }),
      catchError(this.handleError)
    );
  }

  private filterByMonthAndYear(entries: Entry[], month: number, year: number) {
    return entries.filter(entry => {
      const entryDate = moment(entry.date, 'DD/MM/YYYY');
      const monthMatches = entryDate.month() + 1 == month;
      const yearMatches = entryDate.year() == year;

      if(monthMatches && yearMatches) return entry;
    })
  } */

}
