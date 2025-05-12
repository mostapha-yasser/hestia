"use client";

import { media } from "@/consts/general";
import { MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Gmail } from "../icons/Gmail";

function Footer() {
  return (
    <div className={`bg-headerBg text-Text pt-10 pb-3 px-4 sm:px-8 lg:px-20 bgFooter`}>
      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto gap-8 xl:gap-12">
        {/* Contact and Quick Links Section */}
        <div className="flex flex-col md:flex-row gap-8 w-full lg:w-1/2">
          <div className="flex-1 min-w-0">
            <p className="text-xl font-semibold mb-4 md:mb-6">Contact Us</p>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-main/40 mr-2" />
                <span className="truncate">Cairo, Egypt</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-main/40 mr-2" />
                <span className="truncate">+20 102 703 5927</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-main/40 mr-2" />
                <span className="truncate">info@hestiacandles.com</span>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xl font-semibold mb-4 md:mb-6">Quick Links</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-col sm:gap-2">
              <Link href="/about-us" className="block hover:text-main transition truncate">
                About Us
              </Link>
              <Link href="/candles" className="block hover:text-main transition truncate">
                Our Candle
              </Link>
              <Link href="/faq" className="block hover:text-main transition truncate">
                FAQ
              </Link>
              <Link href="/privacy" className="block hover:text-main transition truncate">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <hr className="w-full border-Text/20 my-4 lg:hidden" />

        {/* Developer and Social Media Section */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2">
          <div className="min-w-0">
            <p className="text-xl font-semibold mb-4 md:mb-6">Designed & Developed by</p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                className="text-main hover:underline flex items-center gap-1 truncate"
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
                <span className="truncate">WhatsApp</span>
              </Link>
              <Link
                href="mailto:mostaphyasser18@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-main"
              >
                <Gmail className="w-5 h-5" />
                <span className="truncate">Gmail</span>
              </Link>
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-xl font-semibold mb-4 md:mb-6">Connect With Us</p>
            <div className="flex flex-wrap gap-3">
              {media.map((link) => (
                <Link
                  href={link.href}
                  key={link.id}
                  className="p-2 rounded-full text-white hover:bg-main/80 transition bg-black/30"
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

      <hr className="w-full border-Text/20 my-6" />

      <p className="flex justify-center items-center text-sm">
        <span className="scale-125 pt-0.5 mx-1 tracking-widest">©</span>
        {new Date().getFullYear().toString()}{" "}
        <span className="mx-2 font-medium">Hestia</span>. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
