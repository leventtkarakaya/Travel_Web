"use client";
import React, { memo, useState } from "react";
import MenuBtn from "../MenuBtn";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <>
      <section>
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <Image
              src={"/images/logo.png"}
              width={130}
              height={130}
              className="object-cover"
              alt="logo"
              priority
            />
            <nav className="flex items-center justify-between gap-6">
              <ul className="flex items-center gap-4 max-md:hidden">
                <li className="cursor-pointer">
                  <a
                    href="#"
                    className="px-4 py-2 font-serif font-medium text-white  hover:text-white bg-black/20 hover:bg-[#FF851F] hover:rounded-full transition-all duration-200 delay-100 ease-in-out"
                  >
                    Ana Sayfa
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a
                    href="#"
                    className="px-4 py-2 font-serif font-medium text-white  hover:text-white bg-black/20 hover:bg-[#FF851F] hover:rounded-full transition-all duration-200 delay-100 ease-in-out"
                  >
                    Hakkımızda
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a
                    href="#"
                    className="px-4 py-2 font-serif font-medium text-white  hover:text-white bg-black/20 hover:bg-[#FF851F] hover:rounded-full transition-all duration-200 delay-100 ease-in-out"
                  >
                    Turlarımız
                  </a>
                </li>
              </ul>
              {/* mobile menu button */}
              <div className="hidden max-md:block">
                <MenuBtn />
              </div>
              {/* mobile menu button */}
              {/* User avatar */}
              <div
                className="relative cursor-pointer max-md:hidden"
                onClick={toggle}
              >
                <Image
                  src="/images/avatar.jpg"
                  width={60}
                  height={60}
                  className="object-contain "
                  alt="Avatar"
                />
                {open && (
                  <nav className="absolute right-0 w-40 h-40 rounded-lg bg-black/10 top-100">
                    <ul className="flex flex-col items-center justify-center h-full gap-4 ">
                      <li className="cursor-pointer font-serif font-medium hover:text-white hover:px-4 hover:py-2 hover:rounded-full hover:bg-[#FF851F]">
                        Giriş Yap
                      </li>
                      <li className="cursor-pointer font-serif font-medium hover:text-white hover:px-4 hover:py-2 hover:rounded-full hover:bg-[#FF851F]">
                        Ayarlar
                      </li>
                      <li className="cursor-pointer font-serif font-medium hover:text-white hover:px-4 hover:py-2 hover:rounded-full hover:bg-[#FF851F]">
                        Çıkış Yap
                      </li>
                    </ul>
                  </nav>
                )}
              </div>
              {/* User avatar */}
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Navbar);
