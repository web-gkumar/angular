import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private angularFirestore: AngularFirestore) { }

  getUserDoc(id: any) {
    return this.angularFirestore
      .collection('user-informations').doc(id).valueChanges();
  }

  getUserList() {
    return this.angularFirestore
      .collection('user-informations').snapshotChanges();
  }

  createStoreInfo(store: any) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('user-informations').add(store).then( (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  deleteUser(store: any) {
    return this.angularFirestore
      .collection('user-informations').doc(store.id).delete();
  }

  updateUser(store: any, id: any) {
    return this.angularFirestore.collection('user-informations').doc(id).update({
      storeName: store.name,
      storeCategory: store.category,
      contactNo: store.contactNo,
      storeAddress: store.address,
      storeLocations: store.location,
      storeImages: store.images,
      storeDiscription: store.discriptions
    });
  }
}
