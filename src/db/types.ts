export interface Order {
  orderId: number;
  userId: number;
  createDate: Date;
  productIds: {id: number, count: number}[];
  completed: boolean;
}