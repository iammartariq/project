import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Auth from "../signup/Auth";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center container relative mx-auto h-16 px-6 md:px-24 lg:px-20 xl:px-40">
        <div className="flex">
          <button>
            <div
              className="z-[3] mr-3 flex cursor-pointer flex-col space-y-1 lg:hidden"
              onClick={() => setShow(true)}
            >
              <span
                className={`h-0.5 w-5 block bg-white ${show && "hidden"}`}
              ></span>
              <span
                className={`h-0.5 w-5 block bg-white ${show && "hidden"}`}
              ></span>
              <span
                className={`h-0.5 w-5 block bg-white ${show && "hidden"}`}
              ></span>
            </div>
          </button>
          <Image
            src={"/assets/images/landing/svg/logo-white.svg"}
            alt="logo-white"
            width={194}
            height={36}
          />
        </div>
        <div className="lg:flex hidden gap-1 items-center absolute left-1/2 -translate-x-1/2">
          <Link
            href="#"
            className="bg-[#ffffff4d] rounded-[40px] text-white !font-['Gilroy'] font-medium text-sm p-[8px_12px]"
          >
            RenewMe
          </Link>
          <Link
            href="#"
            className="text-white !font-['Gilroy'] font-medium text-sm p-[8px_12px]"
          >
            Soulscape
          </Link>
          <Link
            href="#"
            className="text-white !font-['Gilroy'] font-medium text-sm p-[8px_12px]"
          >
            Spascape
          </Link>
        </div>
        <div className="lg:flex hidden gap-1 items-center">
          <Link
            href="#"
            className="text-white !font-['Gilroy'] font-medium text-sm p-[8px_12px]"
          >
            Global Partners
          </Link>
          <Link
            href="#"
            className="text-white !font-['Gilroy'] font-medium text-sm p-[8px_12px]"
          >
            In the News
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="text-white !font-['Gilroy'] font-bold text-sm p-[8px_12px] cursor-pointer"
          >
            Log In
          </button>
        </div>
      </div>
      {show && (
        <div className="block backdrop-blur-2xl bg-[rgba(83,158,216,0.5)] lg:hidden fixed w-full h-screen top-0 left-0 px-[15%] pt-[15%] text-white z-[1]">
          <div className="flex flex-col gap-7 font-['Gilroy'] text-xl font-[500]">
            <div
              className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-[50%] bg-[#f07e58]"
              onClick={() => setShow(false)}
            >
              <Image
                src={"/assets/images/landing/svg/close.svg"}
                alt="close"
                width={11}
                height={11}
                className="h-[11px] w-auto"
              />
            </div>
            <Link href="#" className="hover:underline">
              RenewMe
            </Link>
            <Link href="#" className="hover:underline">
              Soulscape
            </Link>
            <Link href="#" className="hover:underline">
              Spascape
            </Link>
            <div className="h-[1px] w-full bg-[#f2f2f2]"></div>
            <Link href="#" className="hover:underline">
              Global Partners
            </Link>
            <Link href="#" className="hover:underline">
              In the News
            </Link>
            <Link href="#" className="hover:underline">
              Log In
            </Link>
          </div>
        </div>
      )}
      {open && <Auth open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Navbar;
