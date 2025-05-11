"use client";
import { useUiContext } from "@/contexts/UiProvider";
import NavLinks from "../headerComponent/NavLinks";

export default function Aside() {
  const { isAsideOpen } = useUiContext();
  return (
    <div
      className={`${
        isAsideOpen
          ? "visible z-50   bg-headerBg min-h-fit right    absolute w-3/5 xs:w-2/5 sm:w-1/3 right-0 py-10 ps-3.5   border-l-4  border-main rounded-bl-2xl "
          : "invisible z-0 "
      }
   `}
    >
      <div className={` ${isAsideOpen ? "" : "hidden"} relative`}>
        <NavLinks />
      </div>
    </div>
  );
}
