import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../../produto/produto.service';
import { ProdutoInterface } from '../../../models/produto-interface';
import { ProdutoDataApiService } from '../../../services/produto-data-api.service';

import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './produtolista.component.html',
  styleUrls: ['./produtolista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  constructor(private produtoDataApiService: ProdutoDataApiService) { }

  private produtos: ProdutoInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  ngOnInit() {
    this.getListProdutos();
  }

  getListProdutos(): void {
    this.produtoDataApiService
      .getAllProdutos()
      .subscribe((produtos: ProdutoInterface) => (this.produtos = produtos));
  }

  onDeleteProduto(id: string): void {
    if (confirm('Apagar o Registro ?')) {
      this.produtoDataApiService.deleteProduto(id).subscribe();
    }
  }

  onPreUpdateProduto(produto: ProdutoInterface): void {
    this.produtoDataApiService.selectedProduto = Object.assign({}, produto);
  }

  resetForm(produtoForm?: NgForm): void {
    this.produtoDataApiService.selectedProduto = {
      _id: '', uuid: '', descricao: '', preco: '',
      embalagem: '', durabilidade: '', peso: '', rotulagem: '', status: ''
    };
  }
}


