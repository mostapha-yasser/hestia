"use client";
import Image from "next/image";
import aboutUsLogoLight from "../../../../public/assets/aboutUsLogoLight.svg";
import aboutUsLogoDark from "../../../../public/assets/aboutUsLogoDark.svg";
import { useUiContext } from "@/contexts/UiProvider";

function About() {
  const { theme } = useUiContext();
  return (
    <div className=" py-15 text-Text w-11/12 mx-auto">
      <div className="flex ">
        <div className="w-full lg:w-3/5">
          <h1 className="text-Text mb-5 text-3xl tracking-widest font-bold">
            About <span className="H-fromHestia  ">estia</span>
          </h1>
          <div className=" text-justify space-y-6 tracking-wide w-full text-xs sm:text-sm md:text-lg">
            <p>
              Founded in 2023 , <strong className="H-fromHestia">estia</strong>{" "}
              was born from a simple idea: to slow down, enjoy the moment, and
              reconnect with the beauty of natural living. In a world full of
              noise and distraction, we wanted to create something peaceful —
              something that brings warmth, simplicity, and calm into your
              space.
            </p>
            <p>
              At <span className="H-fromHestia ">estia</span>, we believe in the
              power of natural elements. Our candles are handcrafted using
              eco-friendly soy wax, pure essential oils, and natural cotton
              wicks — no toxins, no stress, just clean and comforting light.
            </p>
            <p>
              Each candle we create is a reminder to pause, breathe, and enjoy
              the simple moments that matter. Whether you&#39;re relaxing after
              a long day, meditating, or sharing a cozy evening with loved ones
              <span className="H-fromHestia  ">estia</span> is here to make those moments feel special.
            </p>

            <p>
              Thank you for being part of our journey. Welcome to <span className="H-fromHestia  ">estia</span> where
              nature meets calm.
            </p>
          </div>
        </div>
        <Image
        className="hidden lg:block"
          priority={false}
          src={theme === "dark" ? aboutUsLogoDark : aboutUsLogoLight}
          alt={"aboutUs Logo Light"}
        />
      </div>
    </div>
  );
}

export default About;
