import Image from "next/image";
import Link from "next/link";
import EmptyLogo from "../../../public/assets/EmptyLogo.svg";

function Empty() {
  return (
    <div className="flex flex-col py-10 lg:pt-0 lg:flex-row items-center justify-center text-Text w-11/12 mx-auto">
      <div className="z-20 text-center lg:text-left w-full lg:w-1/2 flex flex-col gap-80 lg:gap-5 relative">
        <div className="space-y-9 lg:mb-12">
          <h1 className="text-2xl sm:text-5xl font-extrabold whitespace-nowrap">
           there is NO Order Yet
          </h1>

          <p className="text-center text-sm font-medium sm:text-base lg:text-lg mx-auto lg:text-justify lg:mx-0 w-full lg:w-8/12">
            Looks like you haven’t added anything to your cart yet. Let’s get you back to explore our candle collection and find something you’ll love.
          </p>
        </div>

        <Link
          href="candles"
          className="text-base text-center w-2/3 md:w-2/5 mx-auto 
          lg:text-2xl px-4 py-2 text-white bg-main rounded-2xl"
        >
          Browse Candles
        </Link>
      </div>

      <div className="lg:w-1/2 mt-12 absolute lg:static z-10">
        <Image
        priority
          width={400}
          height={400}
          src={EmptyLogo}
          alt="Empty Cart Illustration"
          className="relative z-10 w-full max-w-lg mx-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}

export default Empty;