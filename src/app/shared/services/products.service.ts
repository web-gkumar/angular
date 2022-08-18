import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl: string = 'https://fakestoreapi.com/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getAllCategory() {
    return this.http.get(this.apiUrl + 'products/categories');
  }

  getAllProducts() {
    return this.http.get(this.apiUrl + 'products');
  }

  getProductDetails(id:any) {
    return this.http.get(this.apiUrl + 'products/' + id)
  }


}
