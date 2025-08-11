import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#3A3A3B]">
      <div className="max-w-[1110px] mx-auto flex flex-col gap-10 px-6 py-10 md:grid md:grid-cols-2 md:py-20">
        <div className="flex md:flex flex-col">
          <Link href={"/"}>
            <Image
              src={"/assets/images/landing/svg/footer-logo.svg"}
              alt="footer-logo"
              width={181}
              height={33}
              className="h-full w-auto"
            />
          </Link>
          <p className="max-w-sm !font-['Gilroy'] text-sm font-normal text-white mt-[26px] leading-[22px] text-justify">
            Our mission is to empower individuals on their journey to a more
            balanced and joyful life. We strive to enhance well-being and
            promote a renewed sense of fulfillment. Through personalized tools
            and resources, RenewMe is dedicated to fostering a happier and more
            harmonious existence for all.
          </p>
          <p className="max-w-sm !font-['Gilroy'] text-sm font-bold text-white mt-[16px]">
            Life balance is better together.
          </p>
        </div>
        <div className="flex justify-between gap-8">
          <div className="flex flex-col gap-3">
            <div className="!font-['Gilroy'] font-bold text-white text-sm">
              Explore
            </div>
            <Link
              href={"#"}
              className="!font-['Gilroy'] font-normal text-white text-sm"
            >
              Sign Up
            </Link>
            <Link
              href={"#"}
              className="!font-['Gilroy'] font-normal text-white text-sm"
            >
              RenewMe
            </Link>
            <Link
              href={"#"}
              className="!font-['Gilroy'] font-normal text-white text-sm"
            >
              Soulscape
            </Link>
            <Link
              href={"#"}
              className="!font-['Gilroy'] font-normal text-white text-sm"
            >
              Spascape
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="!font-['Gilroy'] font-bold text-white text-sm">
              About
            </div>
            <Link
              href={"#"}
              className="!font-['Gilroy'] font-normal text-white text-sm"
            >
              Global Partners
            </Link>
            <Link
              href={"#"}
              className="!font-['Gilroy'] font-normal text-white text-sm"
            >
              Developers
            </Link>
            <Link
              href={"#"}
              className="!font-['Gilroy'] font-normal text-white text-sm"
            >
              Media Inquiries
            </Link>
            <Link
              href="#"
              className="!font-['Gilroy'] font-normal text-white text-sm"
            >
              In the News
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="!font-['Gilroy'] font-bold text-white text-sm">
              Help
            </div>
            <Link
              href={"#"}
              className="!font-['Gilroy'] font-normal text-white text-sm"
            >
              Help & Support
            </Link>
            <Link
              href={"/privacy-policy"}
              className="!font-['Gilroy'] font-normal text-white text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href={"/terms"}
              className="!font-['Gilroy'] font-normal text-white text-sm"
            >
              Terms of Use
            </Link>
            <Link
              href={"#"}
              className="!font-['Gilroy'] font-normal text-white text-sm"
            >
              Disclaimers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
