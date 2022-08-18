import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  menulist:any;

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.productsService.getAllCategory().subscribe(res => {
      this.menulist = res;
    })
  }

}
