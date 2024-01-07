import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getStorage, ref, listAll, getDownloadURL } from '@firebase/storage';
import {MatTabsModule} from '@angular/material/tabs';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-media-file',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule
  ],
  templateUrl: './media-file.component.html',
  styleUrls: ['./media-file.component.scss']
})
export class MediaFileComponent implements OnInit {

  filelist:any = [];
  collectionName= 'application';
  selectedImages:any;
  selectedIndex:any;
  constructor(
    public dialogRef: MatDialogRef<MediaFileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    const storage = getStorage();
    const storageRef = ref(storage, this.collectionName);
    this.filelist = listAll(storageRef).then((result) => {
      const downloadURLPromises = result.items.map((itemRef) =>
        getDownloadURL(itemRef)
      );
      return Promise.all(downloadURLPromises);
    }); 
  }


  selectedImage(imageUrl:any, index:any) {
    this.selectedImages = imageUrl;
    this.selectedIndex = index;
  }

}
