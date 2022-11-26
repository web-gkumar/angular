import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {


    items:any = [];
      
    addToCart(product:any) {
      this.items.push(product);
    }
  
    getItems() {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
      return this.items;
    }



  // cardDataList: any = [];
  // productlist = new BehaviorSubject<any>([]);

  // constructor() { }

  // getProductData() {
  //   return this.productlist.asObservable();
  // }

  // setProduct(product: any) {
  //   this.cardDataList.push(...product);
  //   this.productlist.next(product);
  // }

  // addToCart(product: any) {
  //   this.cardDataList.push(...product);
  //   this.productlist.next(this.cardDataList);
  //   this.getTotalAmount();
  // }
  // getTotalAmount() {
  //   let grandTotal = 0;
  //   this.cardDataList.map((a: any) => {
  //     grandTotal += a.total;
  //   })
  // }

  // removeCardData(product: any) {
  //   this.cardDataList.map((a: any, index: any) => {
  //     if (product.id === a.id) {
  //       this.cardDataList.splice(index, 1);
  //     }

  //   })
  // }

  // removeAllCartData() {
  //   this.cardDataList = [];
  //   this.productlist.next(this.cardDataList);
  // }





}
