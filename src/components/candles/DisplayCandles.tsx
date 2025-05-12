"use client"
import useProduct from "@/Hooks/useProduct";
import CandleCard from "./CandleCard";
import Loading from "../ui/Loading";
export default function DisplayCandles() {
  const { data, isPending, error, isError } = useProduct();



  if (isError) {
    return (
      <p className="text-red-500 text-2xl  text-center w-full  pt-20">
        {error.message}
      </p>
    );
  }

  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <div
          className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3
     justify-items-center gap-15"
        >
          {data.map((candle) => (
            <CandleCard key={candle._id} candleData={candle} />
          ))}
        </div>
      )}
    </>
  );
}
