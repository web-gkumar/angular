import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';


@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  category: any = [];

  constructor(private productsService: ProductsService,) { }

  ngOnInit(): void {
    this.productsService.getAllCategory().subscribe(res => {
      this.category = res;
    })

  }

}
