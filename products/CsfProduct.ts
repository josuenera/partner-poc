import { Product } from "./Product";
import { Product as IProduct } from "../models/product";

export class CsfProduct implements Product {
    private $variant: string;

    constructor () {
        this.$variant = '';
    }
    
    createProduct(product: IProduct): void {
        this.$variant = product.description;
        console.log(`Creating product ${product.name} in CSF`);
    }

    get variant(): string {
        return this.$variant;
    }
}