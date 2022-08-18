import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { FeatureProductComponent } from './feature-product/feature-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    ProductCategoryComponent,
    FeatureProductComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductCategoryComponent,
    FeatureProductComponent
  ]
})
export class ProductsModule { }
