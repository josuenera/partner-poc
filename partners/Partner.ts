import { Order } from '../models/order';

export interface Partner {
  processOrder(order: Order): void;
}