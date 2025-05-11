import { Collection, Db, ObjectId, WithId } from "mongodb";
import { DBOrder, Order, OrderInput } from "../types/order";
import { connectToDatabase } from "@/lib/mongodb";

export class OrderModel {
  private collection: Collection<DBOrder>;
  private static instance: OrderModel;

  private constructor(db: Db) {
    this.collection = db.collection<DBOrder>("orders");
  }

  static async getInstance(): Promise<OrderModel> {
    if (!OrderModel.instance) {
      const { db } = await connectToDatabase("main");
      OrderModel.instance = new OrderModel(db);
    }
    return OrderModel.instance;
  }

  async create(orderData: OrderInput, userId: string): Promise<Order> {

  
      const now = new Date();
      const dbOrder: DBOrder = {
        _id: new ObjectId(),
        userId: userId,
        items: orderData.items,
        totalPrice: orderData.totalPrice,
        orderStatus: "Pending",
        createdAt: now,
        updatedAt: now,
      };

      const result = await this.collection.insertOne(dbOrder);
      return this.toResponse({ ...dbOrder, _id: result.insertedId });
    
  }

  private toResponse(dbOrder: WithId<DBOrder>): Order {
    return {
      _id: dbOrder._id.toString(),
      userId: dbOrder.userId,
      items: dbOrder.items,
      totalPrice: dbOrder.totalPrice,
      orderStatus: dbOrder.orderStatus,
      createdAt: dbOrder.createdAt,
      updatedAt: dbOrder.updatedAt,
    };
  }
}
