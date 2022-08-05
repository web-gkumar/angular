import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Student } from '../interface/student';


@Injectable({
  providedIn: 'root',
})


export class CrudService {
  constructor(private angularFirestore: AngularFirestore) { }

  getUserDoc(id: any) {
    return this.angularFirestore
      .collection('product-collection').doc(id).valueChanges();
  }

  getUserList() {
    return this.angularFirestore
      .collection('product-collection').snapshotChanges();
  }

  createUser(product: any) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('product-collection').add(product).then( (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  deleteUser(product: any) {
    return this.angularFirestore
      .collection('product-collection').doc(product.id).delete();
  }

  updateUser(product: any, id: any) {
    return this.angularFirestore.collection('product-collection').doc(id).update({
      productName: product.name,
      productCategory: product.category,
      productBrand: product.brand,
      productPrice: product.price,
      ProductdiscountPrice: product.discount,
      productImages: product.images,
      productStock: product.stock,
      productDiscription: product.discriptions
    });
  }

}