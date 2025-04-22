import { Order } from '../models/order';

export class OrderBaseMapper {
  static fromRaw(raw: any): Order {
    return {
      id: raw.id || 'default-id',
      amount: raw.amount || 0,
      partnerId: raw.partnerId || 'GALICIA',
    };
  }
}