import { NextResponse } from "next/server";
import { OrderInput } from "../../../types/order";
import { OrderModel } from "../../../models/order";
import { verifyJWT } from "@/lib/session";



export async function POST(request: Request) {
  const authResult = await verifyJWT(request);
  if (!authResult.verified) {
    return NextResponse.json(
      { error: "Authentication required", message: authResult.error },
      { status: 401 }
    );
  }

  try {
    const orderData: OrderInput = await request.json();

    if (!orderData.items) {
      return NextResponse.json(
        { error: "Name and price are required" },
        { status: 400 }
      );
    }
    const userId =authResult.user?.userId as string

    const orderModel = await OrderModel.getInstance();
    const newOrder = await orderModel.create(orderData,userId);

    return NextResponse.json(newOrder, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
