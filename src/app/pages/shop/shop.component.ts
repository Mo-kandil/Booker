import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { 
    
  }
  page=1;
  
  cards=[
    {
      "title":"JavaScript",
      "price":"$10",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "title":"HTML",
      "price":"$20",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "title":"css",
      "price":"$30",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "title":"ES6",
      "price":"$40",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "title":"Dom",
      "price":"$50",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "title":"BootStrap",
      "price":"$60",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
      "title":"Angular",
      "price":"$70",
      "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
      "title":"Node Js",
      "price":"$80",
      "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
      "title":"Express",
      "price":"$90",
      "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    },
    {
      "title":"MongoDB",
      "price":"$100",
      "thumbnailUrl": "https://via.placeholder.com/150/810b14"
    },]
    
    ngOnInit(): void {
    }
}
