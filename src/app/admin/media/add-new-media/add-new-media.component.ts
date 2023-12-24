import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/shared/services/file-upload.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, finalize } from 'rxjs';


@Component({
  selector: 'app-add-new-media',
  templateUrl: './add-new-media.component.html',
  styleUrls: ['./add-new-media.component.scss']
})
export class AddNewMediaComponent implements OnInit {

  downloadURL!: Observable<string>;
  allUploadedImage:any = [];

  constructor(
    private storage: AngularFireStorage
    ) { }

  ngOnInit(): void {
  }

  fileUpload(event:any) {
    const file = event.target.files[0];
    const filePath = `application/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe(finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
             // this.imagepath = url;
              let imagelist:any = [url]
              this.allUploadedImage.push(imagelist);

            }
          });
        })
      ).subscribe( url => {

      });
  }

}
