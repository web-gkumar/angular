import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root',
})


export class CrudService {
  productsRef:any;
  productRef:any;
  constructor(private db: AngularFireDatabase) {}
  // Create product
  AddSProducts(product:any) {
    this.productsRef.push({
      fullName: product.fullName,
      email: product.email,
      mobileNumber: product.mobileNumber,
    });
  }
  // Fetch Single product Object
  GetStudent(id: string) {
    this.productRef = this.db.object('product-list/' + id);
    return this.productRef;
  }
  // Fetch product List
  GetProductsList() {
    this.productsRef = this.db.list('product-list');
    return this.productsRef;
  }
  // Update product Object
  UpdateStudent(product: any) {
    this.productRef.update({
      fullName: product.fullName,
      email: product.email,
      mobileNumber: product.mobileNumber,
    });
  }
  // Delete product Object
  DeleteProducts(id: string) {
    this.productRef = this.db.object('product-list/' + id);
    this.productRef.remove();
  }
}