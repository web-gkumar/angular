import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-feature-product',
  templateUrl: './feature-product.component.html',
  styleUrls: ['./feature-product.component.scss']
})
export class FeatureProductComponent implements OnInit {

  products:any = [];

  constructor(
    private productsService: ProductsService,
    private cardServices: CartService
    ) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(res => {
      this.products = res;
    })
  }

}
