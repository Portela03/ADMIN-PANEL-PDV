export class ProductModel {
    public name: string;
    
    public retailPrice: string;
    public wholesalePrice: string
    public referenceCode:string

    constructor(name: string, referenceCode: string, retailPrice: string, wholesalePrice: string) {
        this.name = name;
        
        this.retailPrice = retailPrice;
        this.wholesalePrice = wholesalePrice;
        this.referenceCode = referenceCode;
    }
}