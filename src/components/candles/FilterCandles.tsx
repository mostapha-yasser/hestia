"use client"

import useHandleAddSearchParams from "@/Hooks/useHandleAddSearchParams";


export default function FilterCandles() {
  const {updateSearchParams,deleteSearchParams,query}=useHandleAddSearchParams()
  return (
    <div
    className="w-full  grid grid-cols-10
    gap-1 sm:gap-3 text-nowrap text-white
    font-bold text-[9px] sm:text-xs md:text-lg lg:xl tracking-wider"
    >
    <input
    onChange={(e)=>updateSearchParams("q", e.target.value)}
    value={query}
      type="text"
      placeholder="Enter Candle Name"
      className="col-span-4 p-2 md:px-4 py-3s  rounded-2xl border text-Text
       border-Input-Border bg-Input-Background placeholder:text-Text/50 placeholder:text-center"
    />
      <button
      onClick={()=>updateSearchParams("category","jar")}
        className="col-span-2 p-2 md:py-3 md:px-4 cursor-pointer
       rounded-2xl bg-main hover:-translate-y-1 transition-all
        duration-300 hover:shadow-Text shadow-2xl"
      >
        Jar Candle
      </button>
      <button
            onClick={()=>updateSearchParams("category","mold")}
      className=" col-span-2 p-2 
      md:py-3 md:px-4 cursor-pointer rounded-2xl
       bg-main hover:-translate-y-1 transition-all
        duration-300 hover:shadow-Text shadow-2xl">
        Mold Candle
      </button>
      <button
            onClick={deleteSearchParams}
      className=" col-span-2 p-2 
      md:py-3 md:px-4 cursor-pointer rounded-2xl
       bg-main hover:-translate-y-1 transition-all
        duration-300 hover:shadow-Text shadow-2xl">
        Reset
      </button>
    </div>
  );
}
