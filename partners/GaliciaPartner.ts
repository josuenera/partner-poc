import { Partner } from './Partner';
import { Order } from '../models/order';
import { Product } from '../models/product';

export class GaliciaPartner implements Partner {
  private $product;

  subscribeProduct(product: Product): void {
    this.$product = product;
  }
  processOrder(order: Order): void {
    console.log(`[Galicia] Procesando orden: ${order.id}`);
  }
  simulateOrder(order: Order): void {
    console.log(`[Galicia] Simulando orden: ${order.id}`);
  }
}