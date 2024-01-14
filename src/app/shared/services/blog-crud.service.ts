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
    private storage: AngularFireStorage,
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

  uploadFile(file: File, path: string): Observable<string> {
    const filePath = `${path}/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // Get file download URL as observable
    return new Observable<string>(observer => {
      task.snapshotChanges().subscribe(
        () => {},
        error => observer.error(error),
        () => fileRef.getDownloadURL().subscribe(url => observer.next(url))
      );
    });
  }
  
  uploadFile2(file: File, path: string): Observable<any> {
    const ref = this.storage.ref(path);
    const task = this.storage.upload(path, file);
    return task.snapshotChanges().pipe( map(() => ref.getDownloadURL()),
      catchError((error) => {
        console.error('Error uploading file: ', error);
        return of(null);
      })
    );
  }

















  
  getAll(): AngularFirestoreCollection<any> {
    return this.db.collection(this.collectionName);
  }

  updateBlogs(id: string, data: any) {
    return this.db.collection(this.collectionName).doc(id).update(data);
  }

  delete(id: string, collectionName:any) {
    return this.db.collection(collectionName).doc(id).delete();
  }

}