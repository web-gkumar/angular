import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  setSlug(formValue:any) {
    let formData = formValue;
    if(formValue.slug == '') {
      formData.slug = formValue.name.replace(/\s+/g, '-').toLowerCase();
    }else {
      formData.slug = formValue.slug.replace(/\s+/g, '-').toLowerCase();
    }
    return formData;
  }
}
