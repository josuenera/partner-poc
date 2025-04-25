import { Product as IProduct } from '../models/product';

export interface Product {
    readonly variant: string;
    createProduct(product: IProduct): void
}