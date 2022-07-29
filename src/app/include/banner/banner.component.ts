import { Component, ViewEncapsulation, ViewChild, OnInit } from "@angular/core";
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent implements OnInit {

  slidderimg = ['assets/img/banner3.jpg', 'assets/img/banner2.jpg', 'assets/img/banner.jpg']
  constructor() { }

  ngOnInit(): void {
  }

}
