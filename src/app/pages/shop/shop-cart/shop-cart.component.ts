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
  title!:string;
  selectedCardsItem :Cards []=[]
  lastView:[]=[];
  ngOnInit(): void {
    if(this.shoService.selectedCardsItem){
      this.selectedCardsItem = JSON.parse(localStorage.getItem('token')|| '{}');
      console.log('CARDS',this.selectedCardsItem);
      
      
    }  
  }
  
  removeFromCart(){
    localStorage.removeItem('token')
    console.log(this.title);
    
  }

}
