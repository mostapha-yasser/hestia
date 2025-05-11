import React from "react";
import ModelContainer from "./ModelContainer";
import { useOrderContext } from "@/contexts/OrderProvider";
import useAddOrder from "@/Hooks/useAddOrder";
import { useUserContext } from "@/contexts/UserProvider";
import Link from "next/link";

function CheckOutModel({
  closeCheckOutModel,
  isModelOpen,
}: {
  closeCheckOutModel: () => void;
  isModelOpen: boolean;
}) {
  const { isLogin } = useUserContext();
  const { totalPrice, totalQuantity, orderItems, resetOrderItem } =
    useOrderContext();
  const orderData = {
    items: orderItems,
    totalPrice: totalPrice,
  };
  const { mutate, isPending } = useAddOrder(closeCheckOutModel, resetOrderItem);
  const sendOrder = () => {
    mutate(orderData);
  };

  return (
    <ModelContainer isModelOpen={isModelOpen}>
      {isLogin ? (
        <article className="w-10/12 md:w-9/12 lg:w-5/12 p-6 md:p-10 flex flex-col gap-6 bg-white rounded-2xl shadow-xl transition-all">
          <p className="text-base sm:text-lg text-main px-5 leading-relaxed text-center">
            ✅ Thank you for your request! Our team will contact you shortly to
            proceed with your order.
          </p>

          <div className="flex justify-between text-sm sm:text-base border-2 border-main rounded-xl overflow-hidden">
            <div className="w-1/2 py-4 px-3 text-center border-r-2 border-main font-semibold">
              Number of Items:
              <span className="ml-1 font-mono text-main">{totalQuantity}</span>
            </div>
            <div className="w-1/2 py-4 px-3 text-center font-semibold">
              Total Price:
              <span className="ml-1 font-mono text-main">{totalPrice}</span>
            </div>
          </div>

          <div className="flex justify-end gap-4 text-base sm:text-lg">
            <button
              onClick={closeCheckOutModel}
              className="border-2 border-main
             text-main font-medium px-5 py-2 rounded-xl 
             cursor-pointer hover:shadow-xs
              shadow-Aside-Border "
            >
              Close
            </button>
            <button
              disabled={isPending}
              onClick={sendOrder}
              className={` text-white font-medium px-5 py-2 
            rounded-xl hover:bg-opacity-90 cursor-pointer transition duration-300 
            hover:shadow-xs shadow-Aside-Border 
            ${isPending ? "bg-main/80" : "bg-main"}
            `}
            >
              {isPending ? "loadin.." : "Confirm"}
            </button>
          </div>
        </article>
      ) : (
        <article className="w-10/12 md:w-9/12 lg:w-5/12 p-6 md:p-10 flex flex-col gap-6 bg-white rounded-2xl shadow-xl transition-all">
          <div className="flex flex-col items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-base sm:text-lg text-main px-5 leading-relaxed text-center">
              To continue with your candle purchase, we kindly ask you to sign
              in to your account. Don&apos;t have an account yet? You&apos;re welcome to
              register - it&apos;s quick and easy.
            </p>
          </div>

          <div className="flex justify-end gap-4 text-base sm:text-lg">
            <button
              onClick={closeCheckOutModel}
              className="flex items-center gap-2 border-2 border-main text-main font-medium px-5 py-2 rounded-xl 
                 cursor-pointer hover:shadow-xs shadow-Aside-Border transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Cancel
            </button>

            <Link
              href="/login"
              className="flex items-center gap-2 bg-main text-white font-medium px-5 py-2 rounded-xl 
                 hover:bg-opacity-90 cursor-pointer transition duration-300 
                 hover:shadow-xs shadow-Aside-Border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Sign In
            </Link>

            <Link
              href="/register"
              className="flex items-center gap-2 bg-main text-white font-medium px-5 py-2 rounded-xl 
                 hover:bg-opacity-90 cursor-pointer transition duration-300 
                 hover:shadow-xs shadow-Aside-Border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              Register
            </Link>
          </div>
        </article>
      )}
    </ModelContainer>
  );
}

export default CheckOutModel;
