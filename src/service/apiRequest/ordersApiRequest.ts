import axiosInstance from "@/lib/axios/instance";
import { OrderInput } from "@/types/order";

const OrderUrl = "orders";


const addOrder = async (OrderData: OrderInput) => {
  const data = await axiosInstance.post(OrderUrl, OrderData);
  return data;
};


export {
  addOrder,
};
