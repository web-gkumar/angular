import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadService } from 'src/app/shared/services/file-upload.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, finalize } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  downloadURL!: Observable<string>;
  allUploadedImage:any = [];

  constructor(
    private fileUploadService:FileUploadService,
    private db: AngularFireDatabase,
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
