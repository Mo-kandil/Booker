export class Cards {
    public title: string;
    public price: number;
    public author: string;
    public thumbnailUrl: string;
    public pages: string;
    public id:number;
    
    constructor(title:string, price:number,author: string ,thumbnailUrl:string ,pages: string, id:number){
        this.title = title
        this.price = price;
        this.author = author
        this.thumbnailUrl = thumbnailUrl;
        this.pages = pages
        this.id = id
    }
}