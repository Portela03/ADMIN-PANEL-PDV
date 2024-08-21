export class ProductModel {
    public name: string;
    public retailPrice: string;
    public wholesalePrice: string
    public ref:string

    constructor(name: string, ref: string, retailPrice: string, wholesalePrice: string) {
        this.name = name;
        
        this.retailPrice = retailPrice;
        this.wholesalePrice = wholesalePrice;
        this.ref = ref;
    }
}