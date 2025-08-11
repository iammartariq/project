import React from "react";
import Image from "next/image";

const AboutDevelopers = () => {
   return (
      <div className="relative">
         <div className="max-w-[1280px] mx-auto grid xl:grid-cols-2 items-center xl:gap-0 gap-20 xl:py-[80px] py-[40px] md:px-10 relative z-[1]">
            <Image
               src={"/assets/images/landing/team-vector.png"}
               alt="team-vector"
               width={547}
               height={541}
               className="xl:order-1 order-2 mx-auto"
            />
            <div className="flex flex-col xl:gap-8 gap-6 xl:max-w-[579px] w-full xl:px-[0_24px] px-[24px] xl:order-2 order-1">
               <h2 className="text-[#3A3A3B] !font-['Gilroy'] font-semibold xl:text-[60px] md:text-[48px] text-[30px] xl:mb-[33px] md:text-center text-left">
                  Made with{" "}
                  <Image
                     src={"/assets/images/landing/svg/heart.svg"}
                     alt="heart"
                     width={33}
                     height={30}
                     className="md:inline hidden lg:w-[33px] w-[29px]"
                  />{" "}
                  L<span className="md:inline hidden">o</span>
                  <Image
                     src={"/assets/images/landing/svg/heart.svg"}
                     alt="heart"
                     width={19}
                     height={19}
                     className="md:hidden inline"
                  />
                  ve.
               </h2>
               <div>
                  <h2 className="md:text-center text-left !font-['Gilroy'] font-bold leading-[150%] md:text-[24px] text-[20px] mb-2 text-[#3A3A3B]">
                     Wellness Meets Technology
                  </h2>
                  <p className="text-[#7B7C7D] !font-['Gilroy'] text-lg text-justify leading-[150%] tracking-[0.2px]">
                     RenewMe collections blends psychology with technology to
                     empower employees and customers of brands. Our mission is
                     to inspire individuals to lead happier and more balanced
                     lives.
                  </p>
               </div>
               <div>
                  <h2 className="md:text-center text-left !font-['Gilroy'] font-bold leading-[150%] md:text-[24px] text-[20px] mb-2 text-[#3A3A3B]">
                     Mission of Mental Health Awareness
                  </h2>
                  <p className="text-[#7B7C7D] !font-['Gilroy'] text-lg text-justify leading-[150%] tracking-[0.2px]">
                     RenewMe was created by Dr. Lisa Palmer to redefine mental
                     wellness through innovation and expertise. Our mission is
                     to provide transformative tools that inspire balance,
                     resilience, and well-being, helping individuals and
                     organizations thrive in today's fast-paced world.
                  </p>
               </div>
               <div>
                  <h2 className="md:text-center text-left !font-['Gilroy'] font-bold leading-[150%] md:text-[24px] text-[20px] mb-2 text-[#3A3A3B]">
                     Elevate Wellness and Drive Engagement
                  </h2>
                  <p className="text-[#7B7C7D] !font-['Gilroy'] text-lg text-justify leading-[150%] tracking-[0.2px]">
                     Discover RenewMe's innovative wellness and white-label
                     solutions designed to enhance guest experiences, drive
                     customer engagement, and seamlessly integrate wellness into
                     commercial and consumer spaces.{" "}
                     <span className="font-bold">
                        Our Wellness Software on Tablets
                     </span>{" "}
                     brings mindfulness tools, guided relaxation, and mental
                     wellness resources to hotels, recovery centers, and
                     airlines. Meanwhile, our{" "}
                     <span className="font-bold">
                        QR-Connected App for Wellness Engagement
                     </span>{" "}
                     offers interactive content and exclusive rewards, promoting
                     mental well-being while strengthening brand loyalty. Plus,
                     with our{" "}
                     <span className="font-bold">iOS wellness app,</span> users
                     can access personalized self-care tools anytime, anywhere.
                  </p>
               </div>
            </div>
         </div>
         <Image
            src={"/assets/images/landing/radial.png"}
            alt="radial"
            width={1400}
            height={541}
            className="absolute bottom-0 right-0"
         />
      </div>
   );
};

export default AboutDevelopers;
