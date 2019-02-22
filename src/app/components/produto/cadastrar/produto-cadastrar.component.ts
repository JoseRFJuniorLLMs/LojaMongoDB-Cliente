import { Component, OnInit } from '@angular/core';

import { ProdutoDataApiService } from '../../../services/produto-data-api.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-produto-cadastrar',
  templateUrl: './produto-cadastrar.component.html',
  styleUrls: ['./produto-cadastrar.component.css']
})
export class ProdutoCadastrarComponent implements OnInit {

  constructor(
    private produtoDataApiService: ProdutoDataApiService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  onSaveProduto(produtoForm: NgForm): void {
    if (produtoForm.value.produtoId == null) {
      // NEW
      this.produtoDataApiService.saveProduto(produtoForm.value)
      .subscribe(produto => location.reload());
    } else {
      // update
      this.produtoDataApiService.saveProduto(produtoForm.value)
      .subscribe(produto => location.reload());
    }
  }

}