import { Injectable } from '@angular/core';
import { Blogs } from '../interface/blog';
import { Firestore,getFirestore,collection,addDoc,getDocs,query,deleteDoc,doc,updateDoc,DocumentData,CollectionReference, onSnapshot,QuerySnapshot } from '@angular/fire/firestore'



@Injectable({
  providedIn: 'root',
})


export class CrudService {
  constructor(public firestore: Firestore) { }

  async createBlogpost(postData:Blogs) {
    const docRef = await addDoc(collection(this.firestore, 'Blogs'), {
      mta_title: postData.mta_title,
      mta_desc: postData.mta_desc,
      blog_title: postData.blog_title,
      blog_image: postData.blog_image,
      blog_desc: postData.blog_desc,
    });
  }
  async getBlogPost() {
    return ( await getDocs(query(collection(this.firestore, 'BlogPost')))).docs.map((postData) => postData.data());
   }

}