import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';


@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styles: []
})
export class ProductCategoryComponent implements OnInit {
  categorydata:any;
  categorybyproduct:any;
  
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    ) {
      this.productsService.getAllCategory().subscribe(data => {
        this.categorydata = data;
      })
      
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.productsService.getSingleCategory('1').subscribe(data => {
        this.categorybyproduct = data;
        console.log(data)
      })
    }

  ngOnInit(): void {
    
  }


}