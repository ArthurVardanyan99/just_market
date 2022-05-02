export interface Order {
  orderId: number;
  userId: number;
  createDate: Date;
  productIds: number[];
  completed: boolean;
}