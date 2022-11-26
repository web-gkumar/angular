import { Component, ViewEncapsulation, ViewChild, OnInit } from "@angular/core";
import { ProductsService } from '../../shared/services/products.service';
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);


@Component({
  selector: 'app-feature-category',
  templateUrl: './feature-category.component.html',
  styles: []
})
export class FeatureCategoryComponent implements OnInit {
  category: any = [];
  constructor(private productsService: ProductsService,) {
    this.productsService.getAllCategory().subscribe(res => {
      this.category = res;
     })
  }


  
  ngOnInit(): void {
    
  }

}
