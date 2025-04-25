export interface Order {
  id: string;
  amount: number;
  partnerId: string;
}

export interface OrderSimulation {
  amount: number;
  installments: Array<string, any>
}