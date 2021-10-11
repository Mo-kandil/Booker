export class Cards {
    public title: string;
    public price: string;
    public author: string;
    public thumbnailUrl: string;
    public pages: string;
    
    constructor(title:string, price:string,author: string ,thumbnailUrl:string ,pages: string){
        this.title = title
        this.price = price;
        this.author = author
        this.thumbnailUrl = thumbnailUrl;
        this.pages = pages
    }
}