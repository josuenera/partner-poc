import { Partner } from './Partner';
import { Order } from '../models/order';

export class ComafiPartner implements Partner {
  processOrder(order: Order): void {
    console.log(`[Comafi] Procesando orden: ${order.id}`);
  }
}