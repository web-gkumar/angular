import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  collectionName= 'Forms';

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {
  }

  createForms(postData: any) {
    return this.db.collection(this.collectionName).add({ ...postData });
  }

  getAllForms(): AngularFirestoreCollection<any> {
    return this.db.collection(this.collectionName);
  }
  


  updateForms(id: string, data: any) {
    return this.db.collection(this.collectionName).doc(id).update(data);
  }

  deleteForms(id: string) {
    return this.db.collection(this.collectionName).doc(id).delete();
  }
}
