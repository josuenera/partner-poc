import { Partner } from './Partner';
import { Order } from '../models/order';

export class GaliciaPartner implements Partner {
  processOrder(order: Order): void {
    console.log(`[Galicia] Procesando orden: ${order.id}`);
  }
}