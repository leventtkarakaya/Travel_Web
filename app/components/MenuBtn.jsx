"use client";
import React, { memo, useState } from "react";
import { AlignJustify, X } from "lucide-react";

const MenuBtn = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open) && console.log(open ? "open" : "closed");
  return (
    <>
      <AlignJustify onClick={toggle} />
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/70 flex justify-center items-center z-10 ${
          open ? "block" : "hidden"
        }`}
      >
        <X
          className="absolute text-[#FF851F] top-16 left-16 w-10 h-10 cursor-pointer"
          onClick={toggle}
        />
        <nav>
          <ul className="flex flex-col gap-8 text-center">
            <li className="font-sans text-2xl font-semibold uppercase text-gray-50">
              <a href="#">Ana Sayfa</a>
            </li>
            <li className="font-sans text-2xl font-semibold uppercase text-gray-50">
              <a href="#">Hakkımızda</a>
            </li>
            <li className="font-sans text-2xl font-semibold uppercase text-gray-50">
              <a href="#">Turlarımız</a>
            </li>
            <li className="font-sans text-2xl font-semibold uppercase text-gray-50">
              <a href="#">Hesapınız</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default memo(MenuBtn);
