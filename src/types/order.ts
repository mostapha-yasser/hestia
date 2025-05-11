import { ObjectId } from "mongodb";

export interface OrderItem {
  _id: string; 
  name: string;
  color:string;
  Scent:string;
  price: number;
  size: "190 Ml" | "180 Ml" | "150 Ml"; 
  quantity: number;
}

export interface DBOrder {
  _id: ObjectId;
  userId: string;
  items: OrderItem[];
  totalPrice: number;
  orderStatus: "Pending" 
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  _id: string;
  userId: string;
  items: OrderItem[];
  totalPrice: number;
  orderStatus: "Pending" 
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderInput {
  items: OrderItem[];
  totalPrice: number;
}
