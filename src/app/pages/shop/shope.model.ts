export class Cards {
    public title: string;
    public price: string;
    public thumbnailUrl: string;
    
    constructor(title:string, price:string, thumbnailUrl:string){
        this.title = title
        this.price = price;
        this.thumbnailUrl = thumbnailUrl;
    }
}