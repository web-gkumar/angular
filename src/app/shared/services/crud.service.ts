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
      .collection('user-collection').doc(id).valueChanges();
  }

  getUserList() {
    return this.angularFirestore
      .collection('user-collection').snapshotChanges();
  }

  createUser(user: any) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('user-collection').add(user).then( (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  deleteUser(user: any) {
    return this.angularFirestore
      .collection('user-collection').doc(user.id).delete();
  }

  updateUser(user: any, id: any) {
    return this.angularFirestore.collection('user-collection').doc(id).update({
      name: user.name,
      email: user.email,
      contact: user.contact,
    });
  }

}