"use client";
import useGetOneProduct from "@/Hooks/useGetOneProduct";
import Loading from "../ui/Loading";
import Image from "next/image";
import mold from "../../../public/assets/mold.jpg";
import { candleScents, candlesColors } from "@/consts/general";
import useCreateOrderItem from "@/Hooks/useCreateOrderItem";
import { useOrderContext } from "@/contexts/OrderProvider";
import CheckOutModel from "../models/CheckOutModel";
import { useState } from "react";
export default function CandleDetail({ candleId }: { candleId: string }) {
    const [isCheckModelOpen, SetIsCheckModelOpen] = useState(false);
  
    const toggleCheckModel = () => {
      addNewItem(orderItem)
      SetIsCheckModelOpen((prev) => !prev);
    };
    const closeCheckOutModel = () => {
      SetIsCheckModelOpen((prev) => !prev);
    };
  const { data, isPending } = useGetOneProduct(candleId);
  const { addNewItem } = useOrderContext();
  const {
    activeCandlePrice,
    activeCandleSize,
    handlePrice,
    handleAddToCart,
    orderItem,
  } = useCreateOrderItem(data);

  if (isPending) {
    return <Loading />;
  }


  return (
    <div
      className=" w-15/16 mx-auto 
      
      py-10 sm:py-15
    text-Text
    flex justify-center
    
    
    
    "
    >
      <div
        className="w-full flex flex-col 
        sm:flex-row justify-between border-2
         border-Aside-Border rounded-2xl"
      >
        <Image
        priority
          src={mold}
          alt={""}
          width={400}
          height={400}
          className=" w-full sm:w-6/13 rounded-t-2xl sm:rounded-t-none sm:rounded-l-2xl "
        />

        <div
          className="mx-auto w-10/12  sm:w-5/13
         flex flex-col space-y-5 xl:space-y-9 
         py-5 xl:py-7"
        >
          <div className="w-full flex justify-between items-center">
            <h1 className=" sm:text-lg md:text-2xl xl:text-4xl  font-bold">
              {data?.name}
            </h1>
            <div className="text-sm sm:text-sm md:text-base lg:text-xl font-mono text-green-400 font-black">
              {activeCandlePrice}Eg
            </div>
          </div>

          <p className=" 
          text-justify text-sm
          md:text-base md-text-lg ">
            {data?.description}
          </p>

          <div
            className="
          bg-headerBg flex   
      
          font-mono  border
          rounded-2xl
          overflow-hidden
          cursor-pointer
          "
          >
{Array.isArray(data?.prices) && data.prices.map((sizeObj) => (
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

          <div className=" flex justify-between items-center w-full">
            <label htmlFor="color" className="w-4/10 ">
              <p className="text-xs mb-1 ">

              Candle color
              </p>
            <select
            onChange={handleAddToCart}
              defaultValue={"light brown"}
              name="color"
              id="color "
              className={`w-full  focus:ring-2
                 text-xs py-1 lg:p-2 md:text-base 
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
            <label htmlFor="Scent" className="w-5/10 ">
              <p className="text-xs mb-1 ">

              candle Scents              </p>
            <select
                        onChange={handleAddToCart}

              defaultValue={ "champagne toast"}
              name="Scent"
              id="Scent"
              className={`w-full text-xs py-1  lg:p-2 focus:ring-2 ring-Input-Border md:text-base   rounded-xl border-1 outline-0 border-Input-Border bg-Input-Background placeholder:text-center`}
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

          <div className=" flex justify-between items-center ">
            <button
              onClick={() => addNewItem(orderItem)}
              className="w-3/7 text-sm p-2 md:text-base 
             md:px-4 md:py-2 border-2 border-main rounded-2xl
              cursor-pointer  hover:tracking-wider
             transition-all duration-300
             "
            >
              Add to cart
            </button>
            <button
            onClick={toggleCheckModel}
              className="w-3/7 text-sm p-2 md:text-base 
             md:px-4 md:py-2 bg-main text-white rounded-2xl cursor-pointer hover:tracking-wider transition-all duration-300 "
            >
              Buy now
            </button>
          </div>
          <CheckOutModel closeCheckOutModel={closeCheckOutModel} isModelOpen={isCheckModelOpen}/>

        </div>
      </div>
    </div>
  );
}
