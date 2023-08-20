import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // https://fakeapi.platzi.com   dummy api used

  
  apiUrl:string = 'https://api.escuelajs.co/api/v1/'
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getAllCategory() {
    return this.http.get(this.apiUrl + 'categories');
  }
  
  getSingleCategory(name:any) {
    return this.http.get(this.apiUrl + 'categories/' + name + '/products');
  }

  getAllProducts() {
    return this.http.get(this.apiUrl + 'products');
  }

  getProductDetails(id:any) {
    let data = this.http.get(this.apiUrl + 'categories/' + id)
    console.log(data)
  }


}
