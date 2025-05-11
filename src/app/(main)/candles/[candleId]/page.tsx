import CandleDetail from "@/components/candles/CandleDetail";

async function ProductDetail({
  params
}: {
  params: Promise<{ candleId: string }>;
}) {



  const candleId = (await params).candleId;

  
  return <CandleDetail candleId={candleId}/>
}

export default ProductDetail;
