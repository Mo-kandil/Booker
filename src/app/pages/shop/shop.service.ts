import { EventEmitter, Injectable } from '@angular/core';
import { Cards } from './shope.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  cardSelected= new EventEmitter<Cards>() ;
  selectedCardsItem : Cards[]=[];
  cards : Cards[] = [
    {
      "title":"JavaScript",
      "price":"$10",
      "thumbnailUrl": "https://images.squarespace-cdn.com/content/v1/563890dce4b0facc12851d8f/1518946801042-JS3B63C79KXK126XSZAR/ke17ZwdGBToddI8pDm48kHdYgXE-SNQap4rdmLtCEYwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKceNcLXZzmps0wW0d931ZSLexUJQha8Su610NWeTt5j8Mo678SpNNKG6QIgZHJogjy/ZiSS+Front+and+Back.jpg?format=300w"
    },
    {
      "title":"HTML",
      "price":"$20",
      "thumbnailUrl": "https://images.squarespace-cdn.com/content/v1/563890dce4b0facc12851d8f/1518946801042-JS3B63C79KXK126XSZAR/ke17ZwdGBToddI8pDm48kHdYgXE-SNQap4rdmLtCEYwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKceNcLXZzmps0wW0d931ZSLexUJQha8Su610NWeTt5j8Mo678SpNNKG6QIgZHJogjy/ZiSS+Front+and+Back.jpg?format=300w"
    },
    {
      "title":"css",
      "price":"$30",
      "thumbnailUrl": "https://images.squarespace-cdn.com/content/v1/563890dce4b0facc12851d8f/1518946801042-JS3B63C79KXK126XSZAR/ke17ZwdGBToddI8pDm48kHdYgXE-SNQap4rdmLtCEYwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKceNcLXZzmps0wW0d931ZSLexUJQha8Su610NWeTt5j8Mo678SpNNKG6QIgZHJogjy/ZiSS+Front+and+Back.jpg?format=300w"
    },
    {
      "title":"ES6",
      "price":"$40",
      "thumbnailUrl": "https://images.squarespace-cdn.com/content/v1/563890dce4b0facc12851d8f/1518946801042-JS3B63C79KXK126XSZAR/ke17ZwdGBToddI8pDm48kHdYgXE-SNQap4rdmLtCEYwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKceNcLXZzmps0wW0d931ZSLexUJQha8Su610NWeTt5j8Mo678SpNNKG6QIgZHJogjy/ZiSS+Front+and+Back.jpg?format=300w/d32776"
    },
    {
      "title":"Dom",
      "price":"$50",
      "thumbnailUrl": "https://images.squarespace-cdn.com/content/v1/563890dce4b0facc12851d8f/1518946801042-JS3B63C79KXK126XSZAR/ke17ZwdGBToddI8pDm48kHdYgXE-SNQap4rdmLtCEYwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKceNcLXZzmps0wW0d931ZSLexUJQha8Su610NWeTt5j8Mo678SpNNKG6QIgZHJogjy/ZiSS+Front+and+Back.jpg?format=300w/f66b97"
    },
    {
      "title":"BootStrap",
      "price":"$60",
      "thumbnailUrl": "https://images.squarespace-cdn.com/content/v1/563890dce4b0facc12851d8f/1518946801042-JS3B63C79KXK126XSZAR/ke17ZwdGBToddI8pDm48kHdYgXE-SNQap4rdmLtCEYwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKceNcLXZzmps0wW0d931ZSLexUJQha8Su610NWeTt5j8Mo678SpNNKG6QIgZHJogjy/ZiSS+Front+and+Back.jpg?format=300w/56a8c2"
    },
    {
      "title":"Angular",
      "price":"$70",
      "thumbnailUrl": "https://images.squarespace-cdn.com/content/v1/563890dce4b0facc12851d8f/1518946801042-JS3B63C79KXK126XSZAR/ke17ZwdGBToddI8pDm48kHdYgXE-SNQap4rdmLtCEYwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKceNcLXZzmps0wW0d931ZSLexUJQha8Su610NWeTt5j8Mo678SpNNKG6QIgZHJogjy/ZiSS+Front+and+Back.jpg?format=300w/b0f7cc"
    },
    {
      "title":"Node Js",
      "price":"$80",
      "thumbnailUrl": "https://images.squarespace-cdn.com/content/v1/563890dce4b0facc12851d8f/1518946801042-JS3B63C79KXK126XSZAR/ke17ZwdGBToddI8pDm48kHdYgXE-SNQap4rdmLtCEYwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKceNcLXZzmps0wW0d931ZSLexUJQha8Su610NWeTt5j8Mo678SpNNKG6QIgZHJogjy/ZiSS+Front+and+Back.jpg?format=300w/54176f"
    },
    {
      "title":"Express",
      "price":"$90",
      "thumbnailUrl": "https://images.squarespace-cdn.com/content/v1/563890dce4b0facc12851d8f/1518946801042-JS3B63C79KXK126XSZAR/ke17ZwdGBToddI8pDm48kHdYgXE-SNQap4rdmLtCEYwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKceNcLXZzmps0wW0d931ZSLexUJQha8Su610NWeTt5j8Mo678SpNNKG6QIgZHJogjy/ZiSS+Front+and+Back.jpg?format=300w/51aa97"
    },
    {
      "title":"MongoDB",
      "price":"$100",
      "thumbnailUrl": "https://images.squarespace-cdn.com/content/v1/563890dce4b0facc12851d8f/1518946801042-JS3B63C79KXK126XSZAR/ke17ZwdGBToddI8pDm48kHdYgXE-SNQap4rdmLtCEYwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKceNcLXZzmps0wW0d931ZSLexUJQha8Su610NWeTt5j8Mo678SpNNKG6QIgZHJogjy/ZiSS+Front+and+Back.jpg?format=300w/810b14"
    },{
      "title":"Sass",
      "price":"$110",
      "thumbnailUrl": "https://images.squarespace-cdn.com/content/v1/563890dce4b0facc12851d8f/1518946801042-JS3B63C79KXK126XSZAR/ke17ZwdGBToddI8pDm48kHdYgXE-SNQap4rdmLtCEYwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKceNcLXZzmps0wW0d931ZSLexUJQha8Su610NWeTt5j8Mo678SpNNKG6QIgZHJogjy/ZiSS+Front+and+Back.jpg?format=300w/810b14"
    },{
      "title":"Scss",
      "price":"$120",
      "thumbnailUrl": "https://images.squarespace-cdn.com/content/v1/563890dce4b0facc12851d8f/1518946801042-JS3B63C79KXK126XSZAR/ke17ZwdGBToddI8pDm48kHdYgXE-SNQap4rdmLtCEYwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKceNcLXZzmps0wW0d931ZSLexUJQha8Su610NWeTt5j8Mo678SpNNKG6QIgZHJogjy/ZiSS+Front+and+Back.jpg?format=300w/810b14"
    },
  ]
  constructor() { }

  getCards(){
    return this.cards.slice();
  }
  saveItemShop(item:Cards){
    this.selectedCardsItem.push(item);
  }
}
