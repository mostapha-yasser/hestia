import Link from "next/link";
import HeroCandle from "./HeroCandle";
import Image from "next/image";
import logo from "../../../public/assets/logo.svg";
export default function HeroSection() {
  return (
    <div className=" w-full h-[500px]  bg-Aside  flex items-center">
      <div className="text-Text space-y-6  xl:space-y-10  text-center lg:w-3/6">
        <h1 className="   text-3xl lg:text-4xl font-bold">
          Welcome to <span className="H-fromHestia  ">estia</span> Candles
        </h1>
        <p className="w-4/5 xl:w-3/5  mx-auto text-justify tracking-wide  lg:text-lg ">
          Discover handcrafted candles that bring warmth , comfort, and style to
          your home. Each candle is made with love to help you relax, feel good,
          and enjoy a calm, cozy space with soft light and gentle scents.
        </p>
        <Link
          href={"/candles"}
          className=" bg-main text-white px-4 py-2 rounded-xl text-xl "
        >
          Discover our candles
        </Link>
      </div>
      <div
        className="relative hidden md:flex  w-3/6  h-full"
      >
        <Image
        priority
          src={logo}
          alt=""
          className=" w-2/3 scale-y-150 scale-x-200  hidden lg:block"
        />

        <HeroCandle />
      </div>
    </div>
  );
}
