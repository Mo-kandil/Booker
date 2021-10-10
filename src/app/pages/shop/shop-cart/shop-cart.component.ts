import { Component, Input, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Cards } from '../shope.model';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  @Input() card!:Cards;
  constructor(private shoService:ShopService) { }

  selectedCardsItem :Cards []=[]

  ngOnInit(): void {
    if(this.shoService.selectedCardsItem){
      console.log('CARDS',this.shoService.selectedCardsItem);
      this.selectedCardsItem = this.shoService.selectedCardsItem
    }
  }
  addToCart(){
    this.shoService.cardSelected.emit(this.card);
  }
}
