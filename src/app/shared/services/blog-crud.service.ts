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

  
  createPost(postData: Blogs, collectionName:any) {
    return this.db.collection(collectionName).add({ ...postData });
  }
  getAllPost(collectionName:any) {
    return this.db.collection(collectionName);
  }
  updatePost(id: string, data: any, collectionName: any) {
    return this.db.collection(collectionName).doc(id).update(data);
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