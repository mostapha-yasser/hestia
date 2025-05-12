import ActiveLink from "./ActiveLink";
import { useUserContext } from "@/contexts/UserProvider";
import { ChevronDown, LogIn, LogOut, UserPlus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NavLinks() {
  const { isLogin, userLogout } = useUserContext();
  const [isAccountListOpen, setIsAccountListOpen] = useState(false);

  return (
    <div className="border-r-4 border-Text md:border-0 flex flex-col md:flex-row justify-between gap-10 py-10 md:gap-2.5  ">
      <ActiveLink targetPath={"/candles"}>Candles </ActiveLink>
      <ActiveLink targetPath={"/about-us"}>About Us</ActiveLink>
      <ActiveLink targetPath={"/contact-us"}>Contact Us</ActiveLink>
      {isLogin ? (
        <ActiveLink onClickFun={userLogout} targetPath={"/login"}>
          <p className="flex gap-1 items-center">
            <LogOut size={22} />
            Logout
          </p>
        </ActiveLink>
      ) : (
        <div
          onClick={() => setIsAccountListOpen((prev) => !prev)}
          className="cursor-pointer "
        >
          <button
            className="flex gap-2 
          items-center
          cursor-pointer
       px-3 py-1 text-nowrap
       text-Text 
        text-lg md:
        lg:text-xl
        xl:text-2xl
        z-30   
        transition-all
        duration-200
        font-medium hover:-translate-y-0.5

          "
          >
            <span>Account</span>
            <ChevronDown size={20} />
          </button>

          <div
            className={`${isAccountListOpen ? "block" : "hidden"}
         top:2/5 md:top-17
         
          max-w-full
          transition-all
        duration-200
          
          absolute bg-headerBg px-7 py-2
        flex flex-col gap-2 md:gap-3.5 
        text-nowrap
       text-Text 
         lg:text-xl
        xl:text-2xl
        z-30   
        border-t-0 md:border-3 
        border-main   md:shadow-xl md:shadow-main
       
          
          `}
          >
            <Link href={"/register"}>
              <p
                className="flex gap-2 md:gap-4 items-center
               transition-all
        duration-200
        font-medium hover:-translate-y-0.5"
              >
                <UserPlus size={18} />
                Create Account
              </p>
            </Link>
            <Link href={"/login"}>
              <p
                className="flex  gap-2 md:gap-4 items-center
               transition-all
        duration-200
        font-medium hover:-translate-y-0.5"
              >
                <LogIn size={18} />
                Login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
