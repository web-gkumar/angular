import { Component, OnInit } from '@angular/core';
import { getStorage, ref, listAll, getDownloadURL } from '@firebase/storage';


@Component({
  selector: 'app-all-medias',
  templateUrl: './all-medias.component.html',
  styleUrls: ['./all-medias.component.scss']
})
export class AllMediasComponent implements OnInit {

  filelist:any = [];
  collectionName= 'application'



  constructor() {}

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


   btncolor = 'primary';
   isViewChange = true;
   changeView(viewlist:any){
      this.isViewChange = !this.isViewChange;
   }

}