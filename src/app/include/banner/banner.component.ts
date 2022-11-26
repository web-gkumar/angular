import { Component, ViewEncapsulation, ViewChild, OnInit } from "@angular/core";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent implements OnInit {

  banner = [
    {'title': 'Huge sale', 'subtitle': 'Up to 70%', 'img': 'banner.jpg'},
    {'title': 'Biggest discount', 'subtitle': 'Check the promotion', 'img': 'banner2.jpg'},
    {'title': 'Biggest sale', 'subtitle': 'Dont miss it', 'img': 'banner3.jpg'},
    {'title': 'Our best products', 'subtitle': 'Special selection', 'img': 'banner4.jpg'},
    {'title': 'Massive sale', 'subtitle': 'Only for today', 'img': 'banner5.jpg'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
