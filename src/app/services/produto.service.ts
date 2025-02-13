import { Injectable } from '@angular/core';
import { Produto } from '../produto';
import { PRODUTOS } from '../produto/PRODUTOS';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  URL_PRODUTOS = 'http://localhost:3000/produtos';
  produtos : Array<Produto>;
  
  constructor(private  httpClient : HttpClient) { 
    this.produtos = PRODUTOS;
  }

  listar(): Observable<Produto[]> {

    return this.httpClient.get<Produto[]>(this.URL_PRODUTOS);
  }

  addProduct(newProduct: Produto): Observable<Produto> {
        
    return this.httpClient.post<Produto>(this.URL_PRODUTOS, newProduct);
  }

  removeProduct(id : number): Observable<Object> {
    return this.httpClient.delete(`${this.URL_PRODUTOS}/${id}`);
  }
}

