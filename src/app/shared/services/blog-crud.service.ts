import { Injectable } from '@angular/core';
import { Blogs } from '../interface/blog';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { catchError, map, Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root',
})


export class CrudService {
  collectionName= 'Blogs';

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  createBlogpost(postData: Blogs) {
    return this.db.collection(this.collectionName).add({ ...postData });
  }

  getAll(): AngularFirestoreCollection<any> {
    return this.db.collection(this.collectionName);
  }

  updateBlogs(id: string, data: any) {
    return this.db.collection(this.collectionName).doc(id).update(data);
  }

  delete(id: string) {
    return this.db.collection(this.collectionName).doc(id).delete();
  }

}