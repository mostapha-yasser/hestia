import DisplayCandles from "@/components/candles/DisplayCandles";
import FilterCandles from "@/components/candles/FilterCandles";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";

function Candles() {
  return (
    <div className="min-h-screen py-10 w-full sm:w-11/12 mx-auto">
      <Suspense fallback={<Loading />}>
      <FilterCandles />
        <DisplayCandles />
      </Suspense>
    </div>
  );
}

export default Candles;
