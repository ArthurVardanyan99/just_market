export interface Order {
  orderId: number;
  userId: number;
  createDate: Date;
  productIds: {id: number, count: number}[];
  completed: boolean;
  address: string;
  phone_number: string;
}

export interface User {
  id: number;
  name: string;
  surname: string;
  password: string;
  email: string;
}
