import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { MaterialModule } from '../material/material.module';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { FeatureProductComponent } from './feature-product/feature-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FeatureCategoryComponent } from './feature-category/feature-category.component';



@NgModule({
  declarations: [
    ProductCategoryComponent,
    FeatureProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartPageComponent,
    CheckoutComponent,
    FeatureCategoryComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'product', component: ProductListComponent},
      {path: 'product/:id', component: ProductDetailsComponent},
      {path: 'category/:name', component: ProductCategoryComponent},
      {path: 'mycart', component: CartPageComponent},
    ])
  ],
  exports: [
    FeatureCategoryComponent,
    FeatureProductComponent
  ]
})
export class ProductsModule { }
