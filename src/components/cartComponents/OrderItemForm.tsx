import { candleScents, candlesColors } from "@/consts/general";
import { useOrderContext } from "@/contexts/OrderProvider";
import useCreateOrderItem from "@/Hooks/useCreateOrderItem";
import useGetOneProduct from "@/Hooks/useGetOneProduct";
import { OrderItem } from "@/types/order";

function OrderItemForm({ orderItemBeforeEdit }: { orderItemBeforeEdit: OrderItem }) {
    const { data } = useGetOneProduct(orderItemBeforeEdit._id);
    const { editItem } = useOrderContext();
    const {
      activeCandlePrice,
      activeCandleSize,
      handleAddToCart,
      handlePrice,
      orderItem,
      addOneMore,
      minsOne,
      quantity
    } = useCreateOrderItem(data, orderItemBeforeEdit);
  
  
   
  
    return (
  
    <div className="text-Text space-y-3  w-full">
      <div className=" flex justify-between items-center text-nowrap">
        <p className=" text-base md:text-xl">{orderItemBeforeEdit.name}</p>
        <span className="font-mono text-green-500 text-sm">
          {activeCandlePrice} Eg
        </span>{" "}
      </div>
      <div className="flex flex-col ">
        <p className="my-2 w-full text-start  text-sm md:text-base font-normal">
          Pick Candle Size
        </p>
        <div
          className="
          bg-headerBg flex   
      
          font-mono border
          rounded-2xl  
        overflow-hidden
          cursor-pointer
          "
        >
          {data?.prices.map((sizeObj) => (
            <label
              key={sizeObj.size}
              className={` w-1/3 p-1  lg:p-2
                   text-nowrap   text-sm  md:text-base text-center   cursor-pointer  " ${
                     activeCandleSize === sizeObj.size
                       ? "bg-main text-white font-bold "
                       : ""
                   }`}
            >
              <input
                type="radio"
                name="radio"
                value={sizeObj.size}
                onChange={handlePrice}
                className="invisible "
              />
              <span>{sizeObj.size}</span>
            </label>
          ))}
        </div>
      </div>

      <div className=" flex  flex-col w-full gap-3">
        <label htmlFor="color" className="w-full">
          <p className="my-2 w-full text-start  text-sm md:text-base font-normal">
            Candle color
          </p>
          <select
            onChange={handleAddToCart}
            defaultValue={"light brown"}
            name="color"
            id="color "
            className={`w-full  focus:ring-2
                 text-sm py-2 md:text-base 
                  ring-Input-Border rounded-xl border-1 outline-0
                   border-Input-Border bg-Input-Background 
                   placeholder:text-center`}
          >
            <option value="" disabled>
              Candle Color
            </option>

            {candlesColors.map((color) => (
              <option
                key={color}
                value={color}
                className=" hover:bg-headerBg  "
              >
                {color}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="Scent" className="w-full">
          <p className="my-2 w-full text-start  text-sm md:text-base font-normal">
            candle Scents
          </p>
          <select
            onChange={handleAddToCart}
            defaultValue={"champagne toast"}
            name="Scent"
            id="Scent"
            className={`w-full  py-2   focus:ring-2 ring-Input-Border md:text-base   
            rounded-xl border-1 outline-0 border-Input-Border
            text-sm
            bg-Input-Background placeholder:text-center`}
          >
            <option value="" disabled>
              Candle Scents
            </option>
            {candleScents.map((Scent) => (
              <option key={Scent} value={Scent} className="truncate ">
                {Scent}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label htmlFor="quantity" className="w-full">
        <p className="my-2 w-full text-start  text-sm md:text-base font-normal">
          candle Quantity
        </p>
        <div className="flex overflow-hidden">
          <button
          onClick={addOneMore}
            className="
            w-1/5 bg-main text-white rounded-l-2xl
            font-black
            cursor-pointer
            hover:text-3xl
            transition-all
            text-center
            
            "
          >
            +
          </button>

          <input
            min={1}
            max={500}
            value={quantity}
            onChange={handleAddToCart}
            type="number"
            className={`
                font-mono
            w-full focus:ring-2
            text-center

             py- md:text-base 
           ring-Input-Border 
            border-1 outline-0
           border-Input-Border 
           bg-Input-Background 
            placeholder:text-center
            `}
          />
          <button
            className="
            w-1/5 bg-main text-white rounded-r-2xl
            font-black
            pb-1
              cursor-pointer
            hover:text-xl
            transition-all
            text-center
            
            
            "
            onClick={minsOne}

          >
            -
          </button>
        </div>
      </label>

      <button
        className="
      bg-main 
      w-2/5 text-xs 
      mt-3
      md:text-sm 
      text-white p-2 rounded-2xl
      lg:text-base
      
      "
        onClick={() => editItem(orderItem)}
      >
        Edit
      </button>
    </div>
  );
}

export default OrderItemForm;
