import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from '../../src/app/produto/cadastro-produto/cadastro-produto.component';
import { ListagemProdutoComponent } from './lista-produto/listagem-produto/listagem-produto.component';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
  
  {
    path:'cadastro-produto',
    component: CadastroProdutoComponent
  },
  {
    path:'listagem-produto',
    component: ListagemProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
