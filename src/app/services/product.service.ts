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
  addProduct(product: Product): Observable<string> {
    return this.http.post<string>(this.API+'/add', product, {responseType: 'text' as 'json'});
  }

  // update product
  updateProduct(product: Product, id: number): Observable<string> {
    return this.http.put<string>(this.API+'/update'+id, product, {responseType: 'text' as 'json'});
  }

  // delete product
  deleteProduct(id: number): Observable<string> {
    return this.http.delete<string>(this.API+'/delete'+id, {responseType: 'text' as 'json'});
  }

  // list products
  listProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API+'/list');
  }

  // get product by id
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.API+'/get'+id);
  }
}
