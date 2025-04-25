import { CgfProduct } from "../products/CgfProduct";
import { CsfProduct } from "../products/CsfProduct";
import { Product } from "../products/Product";

export class ProductFactory {
    static getProduct (productId: string): Product {
        switch (productId.toUpperCase()) {
            case 'CSF':
            return new CsfProduct()
            case 'CGF':
            return new CgfProduct();
            default:
            throw new Error(`Product ${productId} no soportado`);
        }
    }
}