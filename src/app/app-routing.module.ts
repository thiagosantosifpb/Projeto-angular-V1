import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from '../../src/app/produto/cadastro-produto/cadastro-produto.component';
import { ListagemProdutoComponent } from './lista-produto/listagem-produto/listagem-produto.component';
import  { LoginComponent } from './login/login.component';
const routes: Routes = [
  
  
  {  
    path:'cadastro-produto',
    component: CadastroProdutoComponent
  },
  { 
    path: 'login', component: LoginComponent

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
