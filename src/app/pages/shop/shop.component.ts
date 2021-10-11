import { Component, OnInit } from '@angular/core';

import { ShopService } from './shop.service';
import { Cards } from './shope.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  page=1;
  cardd:Cards[]=[];
  selectedCard!:Cards;
  constructor(private shoService:ShopService) { 
  }
  
  ngOnInit(): void {
    this.cardd = this.shoService.getCards();
    this.shoService.cardSelected
    .subscribe(
      (card:Cards)=>{
        this.selectedCard=card;
      }
    );
  }

  onActivate() {
    try 
    { 
     window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
     } catch (e) {
      window.scrollTo(0, 0);
    }
};

  OnclickCard(item:Cards){
    this.shoService.saveItemShop(item);
    localStorage.setItem('token', JSON.stringify(this.shoService.selectedCardsItem));
}

}

