import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produtos.services';
import { Produto } from '../produto';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html'
})
export class ListaProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutoService ) {}

  public produtos : Produto[];

  ngOnInit(){
    this.produtoService.obterProdutos()
    .subscribe(
      produtos =>{
        this.produtos = produtos;
        console.log(produtos);
      },
      error => console.log(error)
    );

  }
}
