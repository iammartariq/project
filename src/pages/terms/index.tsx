/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import classNames from "classnames";
import React from "react";

interface TermsPageProps {
  className?: string;
}

const TermsPage: React.FC<TermsPageProps> = ({ className }) => {
  const textDefaultClass = classNames(`font-['Gilroy'] text-[#333333]`);
  const text1Class = classNames(
    `${textDefaultClass} font-[700] text-3xl md:text-6xl mb-2`
  );
  const text2Class = classNames(
    `${textDefaultClass} font-[700] text-lg pb-5 md:text-xl`
  );
  const text3Class = classNames(
    `${textDefaultClass} font-[400] text-sm pb-5 md:text-base`
  );

  return (
    <>
      <Navbar>
        <title>Terms | RenewMe</title>
        <meta
          name="description"
          content="Read our terms of service and understand your rights and responsibilities when using RenewMe."
        />
      </Navbar>
      <div
        className={`container mx-auto flex flex-col py-24 px-10 text-3xl sm:px-20 md:py-28 lg:max-w-[825px] lg:px-0 lg:py-32 xl:py-40 ${className}`}
      >
        <h1 className={text1Class}>Terms of Service</h1>
        <p className={`${textDefaultClass} pb-5 text-base md:text-lg`}>
          (Updated: January 2025)
        </p>
        <p className={text3Class}>
          Welcome to RenewMe. These Terms of Service govern your use of our
          services and applications.
        </p>
        
        {/* Add your terms content here */}
        <section className="pb-7">
          <p className={text2Class}>Acceptance of Terms</p>
          <p className={text3Class}>
            By accessing and using RenewMe services, you accept and agree to be
            bound by the terms and provision of this agreement.
          </p>
        </section>

        {/* Add more sections as needed */}
      </div>
      <Footer />
    </>
  );
};

export default TermsPage;