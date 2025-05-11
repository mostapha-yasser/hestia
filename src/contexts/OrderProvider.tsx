"use client";
import { OrderItem } from "@/types/order";
import { createContext, ReactNode, useContext, useState } from "react";
type OrderContextType = {
  totalPrice:number;
  orderItems: OrderItem[];
  addNewItem: (item: OrderItem) => void;
  deleteItem: (deleteItem: OrderItem) => void;
  resetOrderItem: () => void
  editItem: (updatedItem: OrderItem) => void;

  lengthOfOrderItem: number;
  totalQuantity:number
};

const OrderContext = createContext<OrderContextType | null>(null);

export default function OrderProvider({ children }: { children: ReactNode }) {
  const [orderItems, setOrderItems] = useState<OrderItem[] | []>([]);
  const totalPrice=+orderItems.reduce((acc,current)=> acc + (current.price*current.quantity),0).toFixed(2)

  const addNewItem = (newOrderItem: OrderItem) => {
    const indexofItemById = orderItems.findIndex(
      (item) => (item._id === newOrderItem._id && item.size === newOrderItem.size && item.Scent === newOrderItem.Scent && item.color === newOrderItem.color )
    );

    if (
      indexofItemById === -1
     
    ) {
      setOrderItems((prev) => [...prev, newOrderItem]);
    } else {
      const updatedItems = [...orderItems];
      const existingItem = updatedItems[indexofItemById];

      updatedItems[indexofItemById] = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      setOrderItems(updatedItems);
    }
  };

  const deleteItem = (deleteItem: OrderItem) => {
    if (orderItems.length > 0) {
      const orderItemWithOutDeletedItem = orderItems.filter(
        (item) =>!(item._id === deleteItem._id &&
           item.size === deleteItem.size && 
           item.Scent === deleteItem.Scent &&
            item.color === deleteItem.color )
      );
      
      setOrderItems(orderItemWithOutDeletedItem);
    }
  };

  const editItem = (editOrderItem: OrderItem) => {
    if (orderItems.length > 0) {
      const indexOfEditedItem = orderItems.findIndex(
        (item) => (
          item._id === editOrderItem._id &&
          item.size === editOrderItem.size &&
          item.Scent === editOrderItem.Scent &&
          item.color === editOrderItem.color
        )
      );
      
      if (indexOfEditedItem !== -1) {
        const updatedItems = [...orderItems];
        updatedItems[indexOfEditedItem] = editOrderItem;
        setOrderItems(updatedItems);
      } else {
        setOrderItems([...orderItems, editOrderItem]);
      }
    } else {
      setOrderItems([editOrderItem]);
    }
  };
  
    
    const resetOrderItem =()=>{
      setOrderItems([])
    }

  
  const lengthOfOrderItem = orderItems.length;
  const totalQuantity = orderItems.reduce((acc,current)=>acc+current.quantity,0);


  return (
    <OrderContext.Provider
      value={{
        resetOrderItem,
        totalPrice,
        totalQuantity,
        lengthOfOrderItem,
        addNewItem,
        deleteItem,
        editItem,
        orderItems,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
export const useOrderContext = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (context === null) {
    throw new Error("useOrderContext must be used within a OrderProvider");
  }
  return context;
};
 

