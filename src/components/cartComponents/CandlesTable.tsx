"use client";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import Empty from "../ui/Empty";
import EditModel from "../models/EditModel";
import { OrderItem } from "@/types/order";
import { useOrderContext } from "@/contexts/OrderProvider";
import Link from "next/link";
import CheckOutModel from "../models/CheckOutModel";

function CandlesTable() {
  const { orderItems, deleteItem, lengthOfOrderItem, totalPrice } =
    useOrderContext();
  const [isModifyModelOpen, SetIsModifyModelOpen] = useState(false);
  const [isCheckModelOpen, SetIsCheckModelOpen] = useState(false);

  const [selectedOrderItem, setSelectedOrderItem] = useState<OrderItem>(
    orderItems[0]
  );

  const toggleModifyModel = (item: OrderItem) => {
    setSelectedOrderItem(item);
    SetIsModifyModelOpen((prev) => !prev);
  };
  const toggleCheckModel = () => {
    SetIsCheckModelOpen((prev) => !prev);
  };

  if (lengthOfOrderItem === 0) {
    return <Empty />;
  }
  return (
    <div
      className="
    my-5 w-full  
    p-3  
    rounded-md mb-5 
    border border-solid
     border-main
"
    >
      <div
        className="
        
        grid 
        grid-cols-11 
        md:grid-cols-12
        text-center text-xs 
       bg-Chart-Background text-Text   
       md:text-base 
       lg:text-xl
       md:font-bold 
       
       "
      >
        <div className="sm:p-2 truncate col-span-2"> candle</div>
        <div className="sm:p-2 truncate col-span-2">color</div>
        <div className="sm:p-2 truncate col-span-2">Scent</div>
        <div className="sm:p-2 truncate">Price</div>
        <div className="sm:p-2 truncate col-span-2">Amount</div>
        <div className="hidden md:block sm:p-2 truncate">Total </div>
        <div className="sm:p-2 truncate">Edit</div>
        <div className="sm:p-2 truncate">Delete</div>
      </div>
      <div className="min-h-[180px] max-h-[280px] scrollbar-hide  overflow-auto  py-2">
        {orderItems?.map((orderItem) => {
          return (
            <div
              key={`${
                orderItem._id +
                orderItem.size +
                orderItem.Scent +
                orderItem.color
              }`}
              className="
              grid grid-cols-11
              md:grid-cols-12
              text-[9px]
              sm:text-xs
               md:text-sm
              text-center
               truncate
                border border-solid
              border-text border-opacity-10
               rounded hover:bg-Aside my-2
               text-nowrap"
            >
              <div className="p-1 truncate col-span-2 ">{orderItem.name}</div>
              <div className="p-1 col-span-2">{orderItem.color}</div>
              <div className="p-1 truncate col-span-2">{orderItem.Scent}</div>
              <div className="p-1 truncate font-mono ">{orderItem.price}</div>
              <div className="p-1 truncate font-mono col-span-2 ">
                {orderItem.quantity}
              </div>
              <div className="p-1 truncate font-mono hidden md:block   ">
                {orderItem.quantity * orderItem.price}
              </div>

              <div
                onClick={() => toggleModifyModel(orderItem)}
                className="
               flex justify-center
               cursor-pointer
               items-center md:justify-start
               pl-4
                hover:scale-105  "
              >
                <Pencil size={15} />
              </div>
              <div
                onClick={() => deleteItem(orderItem)}
                className=" 
                cursor-pointer
                md:justify-start
                items-center
                pl-4 flex justify-center
                text-red-500 
                hover:scale-105
                "
              >
                <Trash size={15} />
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="
        mt-4
              grid grid-cols-11
              md:grid-cols-12
              text-sm
              sm:text-base
            md:text-lg
               xl:text-xl
              text-center
               truncate  border border-solid
              border-text border-opacity-10 
              rounded hover:bg-Aside my-1 
    
              text-nowrap"
      >
        <div className="text-center col-span-6   border-r-1 ">Total price</div>
        <div className="text-center col-span-5 md:col-span-6 font-mono ">
          {totalPrice} Eg
        </div>
      </div>
      <div
        className="w-full flex justify-end gap-3.5 my-4   text-xs 
          sm:text-sm
           md:text-base  text-center"
      >
        <Link
          className=" border-2
           border-main
           cursor-pointer
            rounded-2xl  
            px-4  py-1"
          href={"/candles"}
        >
          Add More Candle
        </Link>
        <button
        onClick={toggleCheckModel}

          className="
           bg-main
           hover:shadow-sm
           shadow-Text

           cursor-pointer
           text-white rounded-2xl 
            px-4  py-1"
        >
          Buy Now
        </button>
      </div>

      <CheckOutModel closeCheckOutModel={toggleCheckModel} isModelOpen={isCheckModelOpen}/>

      <EditModel
        toggleModifyModel={toggleModifyModel}
        isModifyModelOpen={isModifyModelOpen}
        orderItemBeforeEdit={selectedOrderItem}
      />
    </div>
  );
}

export default CandlesTable;
