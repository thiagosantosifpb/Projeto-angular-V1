import { Component } from '@angular/core';
import { Produto } from '../../produto';
import { ProdutoService } from '../../services/produto.service';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listagem-produto',
  standalone: true,
  imports: [MatCardModule, NgFor],
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent {

  products: Array<Produto>;


  constructor(private produtoService: ProdutoService) {
    this.products = new Array<Produto>();
    produtoService.listar().subscribe(produtos => this.products = produtos);  }
 
 

    removeProduct(produto: Produto): void {
      this.produtoService.removeProduct(produto.id).subscribe(
        resposta => {
        const indxUsuarioARemover = this.products.findIndex(p => p.id === produto.id);
        if (indxUsuarioARemover > -1) {
          this.products.splice(indxUsuarioARemover, 1);
        }  
      });
  }
}
