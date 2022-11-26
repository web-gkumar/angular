import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html'
})
export class CartPageComponent implements OnInit {

  items = this.cardServices.getItems();

  constructor(private cardServices: CartService) { }

  ngOnInit(): void {
    console.log(this.items)
  }

}
