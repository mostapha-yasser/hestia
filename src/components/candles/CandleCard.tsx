"use client";
import "../../styles/candleCardStyle.css";
import jar from "../../../public/assets/jar.jpg";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useOrderContext } from "@/contexts/OrderProvider";
import useCreateOrderItem from "@/Hooks/useCreateOrderItem";
import { useState } from "react";
import CheckOutModel from "../models/CheckOutModel";
export default function CandleCard({ candleData }: { candleData: Product }) {
  const [isCheckModelOpen, SetIsCheckModelOpen] = useState(false);

  const toggleCheckModel = () => {
    addNewItem({
      _id: candleData._id,
      name: candleData.name,
      color: "light brown",
      Scent: "champagne toast",
      price: activeCandlePrice,
      size: activeCandleSize,
      quantity: 1,
    })
    SetIsCheckModelOpen((prev) => !prev);
  };
  const closeCheckOutModel = () => {
    SetIsCheckModelOpen((prev) => !prev);
  };

  const { activeCandlePrice, activeCandleSize, handlePrice } =
    useCreateOrderItem(candleData);
  const { addNewItem } = useOrderContext();

  return (
    <div className="card relative">
      <div className="image z-50">
        <Image src={jar} alt="candle image " priority width={300} height={300} />
      </div>
      <p
        className="absolute z-1 top-2  rotate-45 
         right-0 text-2xl text-main"
      >
        {candleData.category}
      </p>
      <div className="productTitle">{candleData.name}</div>
      <div className="cost">{activeCandlePrice} Eg</div>
      <div className="radio-inputs">
        {candleData.prices.map((sizeObj) => (
          <label
            key={sizeObj.size}
            className={`radio ${
              activeCandleSize === sizeObj.size ? "checked-input" : ""
            }`}
          >
            <input
              type="radio"
              name="radio"
              value={sizeObj.size}
              onChange={handlePrice}
            />
            <span className="name">{sizeObj.size}</span>
          </label>
        ))}
      </div>
      <div className="cart-size">
        <Link href={`./candles/${candleData._id}`} className="add-cart ">
          More Detail
        </Link>

        <button
          onClick={() =>
            addNewItem({
              _id: candleData._id,
              name: candleData.name,
              color: "light brown",
              Scent: "champagne toast",
              price: activeCandlePrice,
              size: activeCandleSize,
              quantity: 1,
            })
          }
          className="add-cart "
        >
          Add To Cart
        </button>
      </div>
      <button onClick={toggleCheckModel} className="buy-now">
        Buy Now
      </button>
      <CheckOutModel
        closeCheckOutModel={closeCheckOutModel}
        isModelOpen={isCheckModelOpen}
      />
    </div>
  );
}
