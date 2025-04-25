import { Order } from '../models/order';
import { OrderSimulation } from '../models/order';
import { Product } from '../models/product';
export interface Partner {
  readonly $product: string;
  subscribeProduct(product: Product): void;
  processProductOrder(order: Order): void;
  simulateOrderToProduct(order: Order): OrderSimulation;
}