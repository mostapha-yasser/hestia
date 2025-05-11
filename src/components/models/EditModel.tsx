import ModelContainer from "./ModelContainer";
import { SquareX } from "lucide-react";
import { OrderItem } from "@/types/order";
import OrderItemForm from "../cartComponents/OrderItemForm";

export default function EditModel({
  isModifyModelOpen,
  orderItemBeforeEdit,
  toggleModifyModel
}: {
  isModifyModelOpen: boolean;
  orderItemBeforeEdit: OrderItem ;
  toggleModifyModel:(order: OrderItem)=>void
}) {

  return (
    <ModelContainer isModelOpen={isModifyModelOpen}>
      <div className="  
          relative flex justify-center 
          w-1/5 md:w-2/5
          bg-Aside 
          rounded-2xl py-8
          px-6
          
          " >
        <div 
        onClick={()=>toggleModifyModel(orderItemBeforeEdit)}
        className="absolute top-2 right-2 text-red-500  cursor-pointer">
          <SquareX size={30} />
        </div>

        <OrderItemForm orderItemBeforeEdit={orderItemBeforeEdit}/>
       
      </div>
    </ModelContainer>
  );
}
