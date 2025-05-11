"use client";

import { media } from "@/consts/general";
import { MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Gmail } from "../icons/Gmail";
function Footer() {

  return (
    <>
      
      <div className={`bg-headerBg text-Text pt-10 pb-3  px-8 md:px-35 lg:px-2 xl:px-20 bgFooter`}>
        <div className="flex flex-col lg:flex-row w-full xl:justify-between"> 

        <div className=" grid grid-cols-2 md:grid-cols-1 gap-2 w-full lg:3/7 xl:w-2/4 max-w-6xl mx-auto items-center justify-item-center
         lg:justify-items-start xl:justify-center md:px-6 lg:px-0">  

          <div className="py-2 ">
            <p className="text-Text text-nowrap text-xl font-semibold mb-6  ">Contact Us</p>
            <div className="flex flex-col  gap-4 xs:gap-9 lg:gap-5  md:flex-row text-nowrap">
              <div className="flex items-center   ">
                <MapPin className="w-5 h-5 text-main/40" />
                <span>Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Phone className="w-5 h-5 text-main/40" />
                <span>+20 102 703 5927</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-main/40" />
                <span>info@hestiacandles.com</span>
              </div>
            </div>
          </div>

          <div className="py-2   ">
            <p className="text-Text text-nowrap text-xl font-semibold mb-6 ">Quick Links</p>
            <div className="flex flex-col text-nowrap gap-2  xs:gap-5 lg:gap-8 md:flex-row">
              <Link href="/about-us" className="block hover:text-main transition">
                About Us
              </Link>
              <Link href="/candles" className="block hover:text-main transition">
                Our Candle
              </Link>
              <Link href="/faq" className="block hover:text-main transition">
                FAQ
              </Link>
              <Link href="/privacy" className="block hover:text-main transition">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <hr className="w-full border-Text/20 my-8 lg:hidden" />

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-2 w-full lg:4/7  xl:w-2/4  max-w-6xl mx-auto items-center    justify-items-center lg:justify-items-start xl:justify-items-center lg:pl-4 ">  

        <div className="w-full lg:w-1/2 py-2 xs:px-6 ">
             <p className="text-Text text-nowrap text-xl font-semibold mb-6">Designed & Developed by</p>
          <div className="flex  gap-3  xs:gap-6 ">
            <Link
              className="text-main text-nowrap hover:underline flex items-center gap-1"
              target="_blank"
              href="https://mostapha-yasser.github.io/mostapha-Portfolio/"
            >
              Mostapha Yasser | Portfolio
            </Link>
            <Link
              href="https://wa.me/01027035927"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-main"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Link>
            <Link
              href="mailto:mostaphyasser18@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-main"
            >
              <Gmail className="w-5 h-5" />
              Gmail
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2  py-2   xs:px-6 ">
            <p className="text-Text text-nowrap text-xl font-semibold mb-6">Connect With Us</p>
            <div className="flex gap-3 xs:gap-6 w-full">
              {media.map((link) => (
                <Link
                  href={link.href}
                  key={link.id}
                  className="p-2 md:p-3 rounded-full text-white hover:bg-main/80 transition bg-black/30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        </div>

        <hr className="w-full border-Text/20 my-4" />

        <p className="flex justify-center items-center text-sm">
          <span className="scale-125 pt-0.5 mx-1 tracking-widest">©</span>
          {new Date().getFullYear().toString()}{" "}
          <span className="mx-2 font-medium">Hestia</span>. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;