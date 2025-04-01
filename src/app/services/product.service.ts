import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  http = inject(HttpClient);

  API = 'http://localhost:8080/api/products';

  constructor() { }

  // add product
  addProduct(product: Product): Observable<void> {
    return this.http.post<void>(`${this.API}/add`, product);
  }

  // update product
  updateProduct(product: Product, id: number): Observable<void> {
    return this.http.put<void>(`${this.API}/update/${id}`, product);
  }

  // delete product
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/delete/${id}`);
  }

  // list products
  listProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API}/list`);
  }

  // get product by id
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API}/getById/${id}`);
  }

  // get best option
  getBestOption(id:number): Observable<string> {
    return this.http.get<string>(`${this.API}/bestOption/${id}`);
  }
}
